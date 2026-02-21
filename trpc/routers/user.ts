import { plansConfig } from "@/config";
import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../init";

export const userRouter = createTRPCRouter({
  getDashboardStats: protectedProcedure
    .input(z.void())
    .query(async ({ ctx }) => {
      const { session, prisma } = ctx;

      const dbUser = await prisma.user.findUnique({
        where: { id: session.user.id },
        select: {
          planSlug: true,
          planStatus: true,
          createdAt: true,
        },
      });

      const currentPlan =
        plansConfig.find((plan) => plan.slug === dbUser?.planSlug)?.name ??
        "Free";
      const isActive = dbUser?.planStatus === "active";

      const memberSince = dbUser?.createdAt
        ? new Date(dbUser.createdAt).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
          })
        : "-";

      return {
        plan: currentPlan,
        isActive,
        memberSince,
        emailVerified: session.user.emailVerified,
      };
    }),
});
