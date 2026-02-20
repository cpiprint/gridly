import { legalConfig } from "@/config";
import { LegalPage } from "@/features/landing/legal-page";

export default function PrivacyPage() {
  return <LegalPage document={legalConfig.privacy} />;
}
