import AdminChatDashboard from "@/modules/chat/page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_dashboard/chat/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <AdminChatDashboard />
    </div>
  );
}
