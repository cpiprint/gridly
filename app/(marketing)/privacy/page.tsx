import { legalConfig } from "@/config";
import { LegalPage } from "@/features/landing/legal-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how data is collected, used, and protected in Gridly.",
};

export default function PrivacyPage() {
  return <LegalPage document={legalConfig.privacy} />;
}
