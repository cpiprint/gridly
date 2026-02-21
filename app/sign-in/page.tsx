import SignInPage from "@/features/auth/auth";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your Gridly dashboard.",
  robots: {
    index: false,
    follow: false,
  },
};

const page = () => <SignInPage />;

export default page;
