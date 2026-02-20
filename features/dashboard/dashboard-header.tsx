import { SidebarTrigger } from "@/components/ui/sidebar";

export function DashboardHeader({ title }: { title?: string }) {
  return (
    <header className="flex h-14 items-center gap-4 border-b border-dashed px-6">
      <SidebarTrigger className="size-8 rounded-(--radius) hover:bg-primary/10 hover:text-primary transition-colors " />
      {title && (
        <h1 className="text-sm font-medium text-muted-foreground">{title}</h1>
      )}
    </header>
  );
}
