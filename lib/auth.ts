import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { polar, checkout, webhooks } from "@polar-sh/better-auth";
import { Polar } from "@polar-sh/sdk";
import prisma from "./db";
import { plansConfig } from "@/config";
import { getEnabledSocialProvidersConfig } from "./auth-providers";
import { applyOrderPaidEntitlement } from "./billing";

const socialProviders = getEnabledSocialProvidersConfig();

const polarClient = new Polar({
  accessToken: process.env.POLAR_ACCESS_TOKEN!,
  server: process.env.NODE_ENV === "production" ? "production" : "sandbox",
});

export const auth = betterAuth({
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
          products: plansConfig.map((plan) => ({
            productId: plan.productId,
            slug: plan.slug,
          })),
          successUrl: process.env.POLAR_SUCCESS_URL as string,
          authenticatedUsersOnly: true,
        }),
        webhooks({
          secret: process.env.POLAR_WEBHOOK_SECRET!,
          onOrderPaid: async (payload) => {
            await applyOrderPaidEntitlement(payload);
          },
        }),
      ],
    }),
  ],
});
