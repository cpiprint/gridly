import { DashboardHeader } from "@/features/dashboard/dashboard-header";
import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardLoading() {
  return (
    <>
      <DashboardHeader title="Dashboard" />
      <div className="flex-1 p-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="rounded-lg border border-dashed p-6 space-y-4"
            >
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-8 w-1/3" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
