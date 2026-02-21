import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { polar, checkout, webhooks } from "@polar-sh/better-auth";
import { Polar } from "@polar-sh/sdk";
import { z } from "zod";
import prisma from "./db";
import { plansConfig } from "@/config";
import { getEnabledSocialProvidersConfig } from "./auth-providers";
import { applyOrderPaidEntitlement } from "./billing";

const authEnvSchema = z.object({
  BETTER_AUTH_SECRET: z.string().trim().min(1),
  BETTER_AUTH_URL: z.string().url(),
  POLAR_ACCESS_TOKEN: z.string().trim().min(1),
  POLAR_SUCCESS_URL: z.string().url(),
  POLAR_WEBHOOK_SECRET: z.string().trim().min(1),
});

const authEnv = authEnvSchema.parse(process.env);
const socialProviders = getEnabledSocialProvidersConfig();

const polarClient = new Polar({
  accessToken: authEnv.POLAR_ACCESS_TOKEN,
  server: process.env.NODE_ENV === "production" ? "production" : "sandbox",
});

export const auth = betterAuth({
  // Explicit auth URL + trusted origin keeps origin and CSRF checks strict.
  baseURL: authEnv.BETTER_AUTH_URL,
  trustedOrigins: [authEnv.BETTER_AUTH_URL],
  secret: authEnv.BETTER_AUTH_SECRET,
  database: prismaAdapter(prisma, {
    provider: "postgresql",
    debugLogs: process.env.NODE_ENV !== "production",
  }),
  socialProviders,
  plugins: [
    polar({
      client: polarClient,
      createCustomerOnSignUp: true,
      use: [
        checkout({
          products: plansConfig.flatMap((plan) =>
            plan.productId
              ? [{ productId: plan.productId, slug: plan.slug }]
              : [],
          ),
          successUrl: authEnv.POLAR_SUCCESS_URL,
          authenticatedUsersOnly: true,
        }),
        webhooks({
          // Signature verification is performed by the Polar plugin with this secret.
          secret: authEnv.POLAR_WEBHOOK_SECRET,
          onOrderPaid: async (payload) => {
            try {
              await applyOrderPaidEntitlement(payload);
            } catch (error) {
              console.error("[Polar] Failed to apply order entitlement", error);
              // Re-throw so Polar can retry webhook delivery.
              throw error;
            }
          },
        }),
      ],
    }),
  ],
});
