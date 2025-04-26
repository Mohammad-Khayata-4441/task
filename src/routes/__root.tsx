import AppProviders from "@/core/components/Providers";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export type AppRouteContext = {
  app_context_prop?: unknown;
};

export const Route = createRootRouteWithContext<AppRouteContext>()({
  component: () => (
    <>
      <AppProviders>
        <Outlet />
        <TanStackRouterDevtools />
      </AppProviders>
    </>
  ),
});
