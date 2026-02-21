import { DashboardHeader } from "@/features/dashboard/dashboard-header";
import { Chat } from "@/features/ai/chat";

export default function AIPage() {
  return (
    <>
      <DashboardHeader title="AI Chat" />
      <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
        <Chat />
      </div>
    </>
  );
}
