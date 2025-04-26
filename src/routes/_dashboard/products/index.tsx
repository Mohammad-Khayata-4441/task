import i18n from "@/libs/i18n";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_dashboard/products/")({
  component: RouteComponent,
  staticData: {
    title: i18n.t("products.title"),
  },
  head: () => ({
    meta: [{ name: "description", content: "Products" }, { title: "Products" }],
  }),
});

function RouteComponent() {
  return <div>Hello "/_dashboard/products/"!</div>;
}
