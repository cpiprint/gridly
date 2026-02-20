import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { polar, checkout, webhooks } from "@polar-sh/better-auth";
import { Polar } from "@polar-sh/sdk";
import prisma from "./db";
import { plansConfig } from "@/config";

const polarClient = new Polar({
  accessToken: process.env.POLAR_ACCESS_TOKEN!,
  server: "sandbox", // Change to "production" when going live
});

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
    debugLogs: true,
  }),
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
    discord: {
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
    },
  },
  plugins: [
    polar({
      client: polarClient,
      createCustomerOnSignUp: true,
      use: [
        checkout({
          products: plansConfig.map((plan) => ({
            productId: plan.priceId,
            slug: plan.name.toLowerCase().replace(/\s+/g, "-"),
          })),
          successUrl: "/dashboard?checkout=success",
          authenticatedUsersOnly: false,
        }),
        webhooks({
          secret: process.env.POLAR_WEBHOOK_SECRET!,
          onOrderPaid: async (payload) => {
            console.log("[Polar] Order paid:", payload.data.customer.email);
            // You can update user records here once webhook is configured
          },
        }),
      ],
    }),
  ],
});
