import { TooltipProvider } from "@/components/ui/tooltip";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TooltipProvider delayDuration={200}>{children}</TooltipProvider>
    </>
  );
}
