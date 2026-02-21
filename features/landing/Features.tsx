import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { BadgeCheckIcon } from "lucide-react";
import { landingConfig } from "@/config";

const { techStack } = landingConfig;

export const Features = () => {
  return (
    <section className="container mx-auto max-w-4xl border-x border-dashed px-6 py-24 border-b">
      <div className="text-left mb-16">
        <h2 className="text-3xl font-medium tracking-tight mb-4 font-doto">
          <span className="whitespace-nowrap flex items-center gap-2">
            Tech
            <BadgeCheckIcon className="size-8 fill-primary/30 text-primary" />
          </span>
          Stack
        </h2>
        <p className="text-muted-foreground text-md max-w-2xl">
          Powered by the most modern and reliable tools in the React ecosystem.
          Everything you need to build at scale.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techStack.map((feature, i) => (
          <Card
            key={i}
            className="bg-background/50 border-border/50 hover:bg-muted/50 transition-colors group cursor-default"
          >
            <CardHeader className="space-y-4">
              <div className="text-muted-foreground group-hover:text-primary transition-colors flex items-center h-8">
                <feature.icon size="34" />
              </div>
              <div className="space-y-1">
                <CardTitle className="text-lg font-medium">
                  {feature.title}
                </CardTitle>
                <CardDescription className="leading-relaxed text-sm">
                  {feature.description}
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};
