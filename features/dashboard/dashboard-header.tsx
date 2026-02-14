import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

export function DashboardHeader({ title }: { title?: string }) {
  return (
    <header className="flex h-14 items-center gap-4 border-b border-dashed px-6">
      <SidebarTrigger className="-ml-2" />
      <Separator orientation="vertical" />
      {title && (
        <h1 className="text-sm font-medium text-muted-foreground">{title}</h1>
      )}
    </header>
  );
}
