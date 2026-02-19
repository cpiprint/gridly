"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { appConfig, authConfig, dashboardConfig } from "@/config";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { LogOutIcon } from "lucide-react";
import { signOut } from "@/lib/auth-client";
import GridlyLogo from "@/components/gridly-logo";

export function AppSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push(authConfig.auth.redirectAfterSignOut);
  };

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-dashed px-6 py-5 min-h-24 justify-center">
        <Link href="/" className="flex items-center gap-4.5 group" prefetch>
          <GridlyLogo
            size={30}
            className="text-primary/60 group-hover:text-primary transition-colors"
          />
          <span className="font-doto text-xl leading-none uppercase tracking-[0.2em] font-bold">
            {appConfig.name}
          </span>
        </Link>
      </SidebarHeader>

      <SidebarContent className="px-2 py-2">
        <SidebarMenu>
          {dashboardConfig.nav.map((item) => {
            const isActive = pathname === item.url;
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild isActive={isActive}>
                  <Link href={item.url} prefetch>
                    <item.icon className="size-4" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="border-t border-dashed px-4 py-3">
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            {appConfig.name} v1
          </span>
          <div className="flex items-center gap-1">
            <ModeToggle className="size-8" />
            <Button
              variant="ghost"
              size="icon"
              onClick={handleSignOut}
              className="size-8 rounded-[var(--radius)] text-muted-foreground hover:text-destructive transition-colors cursor-pointer"
            >
              <LogOutIcon className="size-4" />
            </Button>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
