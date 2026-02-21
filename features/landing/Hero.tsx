import { Button } from "@/components/ui/button";
import { ArrowRight, DatabaseIcon } from "lucide-react";
import { appConfig, landingConfig } from "@/config";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

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

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
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
