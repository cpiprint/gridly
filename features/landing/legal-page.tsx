import { appConfig } from "@/config";
import type { LegalDocument } from "@/types/config";
import Link from "next/link";

export function LegalPage({ document }: { document: LegalDocument }) {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto max-w-4xl px-6 py-16 border-x border-dashed border-b">
        <div className="space-y-4">
          <Link
            href="/"
            className="text-xs uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
          >
            {appConfig.name}
          </Link>
          <h1 className="text-3xl font-doto font-bold tracking-tight">
            {document.title}
          </h1>
          <p className="text-sm text-muted-foreground">
            Last updated: {document.lastUpdated}
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {document.intro}
          </p>
        </div>

        <div className="mt-10 space-y-8">
          {document.sections.map((section) => (
            <section key={section.title} className="space-y-3">
              <h2 className="text-base font-semibold">{section.title}</h2>
              <div className="space-y-2">
                {section.body.map((line) => (
                  <p key={line} className="text-sm text-muted-foreground">
                    {line}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
