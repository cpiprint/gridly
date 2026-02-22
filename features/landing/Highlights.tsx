import { Check, SparklesIcon } from "lucide-react";
import { landingConfig } from "@/config";
import { cn } from "@/lib/utils";

const { features } = landingConfig;

export const Highlights = () => {
  return (
    <section className="container mx-auto max-w-6xl border-x border-dashed px-6 py-24 border-b">
      <div className="text-left mb-16">
        <h2 className="text-3xl font-medium tracking-tight mb-4 font-doto">
          <span className="whitespace-nowrap flex items-center gap-2">
            Why
            <SparklesIcon className="size-8 fill-primary/30 text-primary" />
          </span>
          Choose Us
        </h2>
        <p className="text-muted-foreground text-md max-w-2xl">
          Everything you need to launch your SaaS — authentication, payments,
          and AI — all wired up and ready to go.
        </p>
      </div>

      <div className="space-y-16 md:space-y-24">
        {features.map((feature, i) => (
          <div
            key={i}
            className={cn(
              "grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center",
              i % 2 === 1 && "md:[direction:rtl]",
            )}
          >
            {/* Content side */}
            <div
              className={cn("space-y-5", i % 2 === 1 && "md:[direction:ltr]")}
            >
              <span className="inline-block px-3 py-1 text-[11px] font-bold uppercase tracking-widest font-doto text-primary bg-primary/10 border border-primary/20">
                {feature.bullets}
              </span>

              <h3 className="text-2xl font-semibold tracking-tight leading-tight">
                {feature.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              <ul className="space-y-2.5 pt-1">
                {feature.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <Check className="size-4 text-primary shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual side */}
            <div
              className={cn(
                "relative aspect-4/3 bg-muted/30 border border-border/50 overflow-hidden flex items-center justify-center group",
                i % 2 === 1 && "md:[direction:ltr]",
              )}
            >
              {/* Placeholder visual — replace with screenshots or illustrations */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent" />
              <div className="relative grid grid-cols-3 gap-3 p-8 opacity-40 group-hover:opacity-60 transition-opacity">
                {Array.from({ length: 9 }).map((_, k) => (
                  <div
                    key={k}
                    className={cn(
                      "h-8 rounded-sm",
                      k % 3 === 0
                        ? "bg-primary/30"
                        : k % 2 === 0
                          ? "bg-muted-foreground/15"
                          : "bg-muted-foreground/10",
                    )}
                  />
                ))}
              </div>
              <span className="absolute bottom-3 right-3 text-[10px] font-doto uppercase tracking-widest text-muted-foreground/50">
                {feature.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
