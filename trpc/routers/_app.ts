import { createTRPCRouter, publicProcedure, protectedProcedure } from "../init";
import { userRouter } from "./user";
import { z } from "zod";

export const appRouter = createTRPCRouter({
  hello: publicProcedure.input(z.void()).query(() => "Hello World"),
  me: protectedProcedure.input(z.void()).query(({ ctx }) => ctx.session.user),
  user: userRouter,
});

export type AppRouter = typeof appRouter;
