import { createFileRoute, HeadContent, Outlet } from "@tanstack/react-router";
import DashboardLayout from "../../modules/dashboard/DashboardLayout";
import i18n from "@/libs/i18n";
export const Route = createFileRoute("/_dashboard")({
  component: RouteComponent,
  staticData: {
    title: i18n.t("dashboard.title"),
  },
});

function RouteComponent() {
  return (
    <DashboardLayout>
      <HeadContent />

      <Outlet></Outlet>
    </DashboardLayout>
  );
}
