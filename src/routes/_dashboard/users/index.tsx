import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_dashboard/users/")({
  component: RouteComponent,
  staticData: {
    title: "Users",
  },
});

function RouteComponent() {
  return <div>Hello "/_dashboard/users/"!</div>;
}
