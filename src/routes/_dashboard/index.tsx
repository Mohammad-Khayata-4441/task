import { createFileRoute } from "@tanstack/react-router";
import HomePage from "../../modules/statistics/page";
import i18n from "@/libs/i18n";

export const Route = createFileRoute("/_dashboard/")({
  component: RouteComponent,
  staticData: {
    title: i18n.t("home.title"),
  },
});

function RouteComponent() {
  return <HomePage />;
}
