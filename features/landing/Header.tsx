import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { appConfig } from "@/config";
import Link from "next/link";
import GridlyLogo from "@/components/gridly-logo";

export const Header = () => {
  return (
    <div className="container mx-auto max-w-4xl px-6 h-14 border-b border-dashed border-x flex justify-between items-center">
      <Link href="/" className="flex items-center gap-2 group" prefetch>
        <GridlyLogo
          size={18}
          className="text-primary/60 group-hover:text-primary transition-colors"
        />
        <span className="font-doto text-xl font-bold tracking-tighter">
          {appConfig.name.toUpperCase()}
        </span>
      </Link>
      <div className="flex items-center gap-4">
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
