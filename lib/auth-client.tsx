import { createAuthClient } from "better-auth/react";
import { polarClient } from "@polar-sh/better-auth";

function getBaseURL() {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }

  return (
    process.env.NEXT_PUBLIC_BASE_URL ||
    process.env.BETTER_AUTH_URL ||
    "http://localhost:3000"
  );
}

export const authClient = createAuthClient({
  baseURL: getBaseURL(),
  plugins: [polarClient()],
});

export const { signIn, signUp, useSession, signOut } = authClient;
