import { Button } from "@/components/ui/button";
import { ArrowRight, DatabaseIcon } from "lucide-react";
import { landingConfig } from "@/config";
import Link from "next/link";

const { hero } = landingConfig;

export const Hero = () => {
  return (
    <section className="container mx-auto max-w-4xl px-6 py-24 md:py-32 text-left border-x border-dashed border-b">
      <h1 className="text-3xl md:text-5xl tracking-tight mb-4 font-doto relative">
        <span className="whitespace-nowrap text-primary flex items-center gap-2">
          {hero.titleAccent}
          <DatabaseIcon className="size-8 text-primary fill-primary/30" />
        </span>{" "}
        {hero.title}
      </h1>

      <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mb-8">
        {hero.subtitle}
      </p>

      <Link href="/sign-in" prefetch className="cursor-pointer">
        <Button size="lg">
          {hero.cta}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </section>
  );
};
