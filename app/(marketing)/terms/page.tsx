import { legalConfig } from "@/config";
import { LegalPage } from "@/features/landing/legal-page";

export default function TermsPage() {
  return <LegalPage document={legalConfig.terms} />;
}
