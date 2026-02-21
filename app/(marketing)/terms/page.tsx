import { legalConfig } from "@/config";
import { LegalPage } from "@/features/landing/legal-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the terms governing access and use of Gridly.",
};

export default function TermsPage() {
  return <LegalPage document={legalConfig.terms} />;
}
