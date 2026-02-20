import { createTRPCRouter, publicProcedure, protectedProcedure } from "../init";

export const appRouter = createTRPCRouter({
  hello: publicProcedure.query(() => {
    return "Hello World";
  }),
  me: protectedProcedure.query(({ ctx }) => {
    return ctx.session.user;
  }),
});

export type AppRouter = typeof appRouter;
