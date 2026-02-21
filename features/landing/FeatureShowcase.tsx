import { Card } from "@/components/ui/card";
import { landingConfig } from "@/config";
import { cn } from "@/lib/utils";
import { BoxesIcon, Check } from "lucide-react";

const { features } = landingConfig;

export const FeatureShowcase = () => {
  return (
    <section className="container mx-auto max-w-4xl px-6 py-18 md:py-24 text-left border-x border-dashed border-b overflow-hidden">
      <div className="text-left mb-8 relative">
        <h2 className="text-3xl font-medium tracking-tight mb-4 font-doto">
          <span className="whitespace-nowrap flex items-center gap-2">
            Core
            <BoxesIcon className="size-8 fill-primary/30 text-primary" />
          </span>
          Feature
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
          Skip the boilerplate. Gridly gives you the perfect combination of
          authentication, payments, theming, and AI integrations directly out of
          the box, styled beautifully.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, i) => (
          <Card
            key={i}
            className={cn(
              "relative bg-background/50 border-border/50 p-8 flex flex-col justify-between overflow-hidden group hover:border-primary/50 transition-colors hover:bg-muted/40",
              i === 0 ? "md:col-span-2 md:grid md:grid-cols-2 md:gap-8 " : "",
            )}
          >
            {/* Background pattern for visual interest */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-size-[20px_20px] pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-6 inline-flex items-center justify-center  p-3 text-primary w-fit">
                <feature.icon className="size-6" />
              </div>
              <h3 className="text-2xl font-bold mb-3 tracking-tight font-doto">
                {feature.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed grow">
                {feature.description}
              </p>

              <ul className="space-y-3 mt-auto">
                {feature.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-2 text-sm font-medium text-foreground/80"
                  >
                    <Check className="size-4 text-primary shrink-0 -mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
