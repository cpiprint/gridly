import { Button } from "@/components/ui/button";
import { ArrowRight, DatabaseIcon } from "lucide-react";
import { appConfig, landingConfig } from "@/config";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const { hero } = landingConfig;

export const Hero = () => {
  return (
    <section className="container mx-auto max-w-6xl px-6 py-24 md:py-32 text-left border-x border-dashed border-b">
      <h1 className="text-4xl md:text-6xl tracking-tight font-medium relative">
        <span className="text-primary inline-flex items-center gap-2 font-doto">
          {hero.titleAccent}
          <DatabaseIcon className="size-8 md:size-10 text-primary fill-primary/30" />
        </span>
        <br />
        <span className="block mt-1">{hero.title}</span>
      </h1>

      <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
        {hero.subtitle}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <Link href="/sign-in" prefetch className="cursor-pointer">
          <Button size="lg" className="w-full sm:w-auto">
            {hero.cta}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
        <Link
          href={appConfig.github}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <Button size="lg" variant="secondary" className="w-full sm:w-auto">
            <FaGithub />
            Star on GitHub
          </Button>
        </Link>
      </div>
    </section>
  );
};
