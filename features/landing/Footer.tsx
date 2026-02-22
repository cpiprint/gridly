import Link from "next/link";
import { appConfig, landingConfig } from "@/config";

const { footer } = landingConfig;

export const Footer = () => {
  return (
    <footer className="container mx-auto max-w-6xl border-x border-dashed px-6 border-t">
      <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {appConfig.name}. All rights reserved.
        </p>
        <div className="flex gap-6">
          {footer.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
