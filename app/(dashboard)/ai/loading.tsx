import { DashboardHeader } from "@/features/dashboard/dashboard-header";
import { Skeleton } from "@/components/ui/skeleton";

export default function AILoading() {
  return (
    <>
      <DashboardHeader title="AI Chat" />
      <div className="flex flex-col flex-1 min-h-0 overflow-hidden p-4">
        <div className="flex-1 flex flex-col justify-end space-y-6 pb-20 max-w-3xl w-full mx-auto">
          {/* User message skeleton */}
          <div className="flex justify-end">
            <Skeleton className="h-10 w-2/3 max-w-[300px] rounded-2xl rounded-br-sm" />
          </div>

          {/* AI message skeleton */}
          <div className="flex items-start gap-4">
            <Skeleton className="size-8 rounded-full shrink-0" />
            <div className="space-y-2 w-full max-w-lg">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-4/6" />
            </div>
          </div>
        </div>

        {/* Input area skeleton */}
        <div className="mt-4 max-w-3xl w-full mx-auto">
          <Skeleton className="h-14 w-full rounded-full" />
        </div>
      </div>
    </>
  );
}
