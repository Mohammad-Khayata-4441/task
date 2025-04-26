import QuestionsPage from "@/modules/questions/page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_dashboard/questions/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <QuestionsPage></QuestionsPage>
    </div>
  );
}
