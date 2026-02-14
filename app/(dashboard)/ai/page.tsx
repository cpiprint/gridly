import { DashboardHeader } from "@/features/dashboard/dashboard-header";

export default function AIPage() {
  return (
    <>
      <DashboardHeader title="AI Chat" />
      <div className="flex-1 p-6">
        <div className="rounded-lg border border-dashed p-6 space-y-2 max-w-2xl">
          <h3 className="text-sm font-medium text-muted-foreground">AI Chat</h3>
          <p className="text-sm text-muted-foreground/60">
            AI chatbot with tool calling will be built here using the Vercel AI
            SDK. See the AI_NATIVE plan.
          </p>
        </div>
      </div>
    </>
  );
}
