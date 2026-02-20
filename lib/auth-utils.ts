import { auth } from "./auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { cache } from "react";

export const getSession = cache(async () => {
  return auth.api.getSession({
    headers: await headers(),
  });
});

export const requireAuth = async () => {
  const session = await getSession();
  if (!session) {
    redirect("/sign-in");
  }
  return session;
};

export const requireUnauth = async () => {
  const session = await getSession();
  if (session) {
    redirect("/dashboard");
  }
  return session;
};
