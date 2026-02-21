"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { DashboardHeader } from "@/features/dashboard/dashboard-header";

type DashboardErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function DashboardError({ error, reset }: DashboardErrorProps) {
  useEffect(() => {
    console.error("[Dashboard] Unhandled render error", error);
  }, [error]);

  return (
    <>
      <DashboardHeader title="Error" />
      <div className="flex flex-1 items-center justify-center p-6">
        <div className="w-full max-w-md rounded-xl border border-dashed p-6 text-center">
          <h2 className="text-base font-semibold">Dashboard failed to load</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Please retry. If this keeps happening, check server logs.
          </p>
          <Button className="mt-4" onClick={reset}>
            Retry
          </Button>
        </div>
      </div>
    </>
  );
}
