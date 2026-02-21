import Link from "next/link";
import { HeartIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}

      {/* Floating "Support" button — fixed bottom-right */}
      <TooltipProvider delayDuration={200}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="https://buymeacoffee.com/adikodez"
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full border border-border bg-background/80 backdrop-blur-sm px-4 py-2.5 text-sm font-medium text-foreground shadow-lg hover:shadow-xl hover:scale-105 hover:border-yellow-400/60 transition-all duration-200 group"
            >
              <HeartIcon className="size-4 text-yellow-500 group-hover:animate-pulse" />
              <span>Support</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="top" className="text-xs">
            Buy me a coffee ☕
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}
