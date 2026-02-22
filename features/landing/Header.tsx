import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { appConfig } from "@/config";
import Link from "next/link";
import GridlyLogo from "@/components/gridly-logo";
import { FaGithub } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
export const Header = () => {
  return (
    <div className="container mx-auto max-w-6xl px-6 h-14 border-b border-dashed border-x flex justify-between items-center">
      <Link href="/" className="flex items-center gap-2 group" prefetch>
        <GridlyLogo
          size={18}
          className="text-primary/60 group-hover:text-primary transition-colors"
        />
        <span className="font-doto text-xl font-bold tracking-tighter">
          {appConfig.name.toUpperCase()}
        </span>
      </Link>
      <div className="flex items-center gap-4 ">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href={appConfig.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="group rounded-full active:scale-95 transition-all duration-300 text-muted-foreground hover:text-foreground hover:bg-muted"
              >
                <FaGithub className="transition-transform duration-500 ease-in-out group-hover:rotate-12 group-hover:scale-110" />
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Star on GitHub</p>
          </TooltipContent>
        </Tooltip>
        <ModeToggle />
        <Link href="/sign-in" prefetch>
          <Button variant={"outline"} size={"sm"}>
            Log in
          </Button>
        </Link>
      </div>
    </div>
  );
};
