import { Breadcrumbs } from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import { Link, useMatches, useMatchRoute } from "@tanstack/react-router";
export default function RouterBreadCumb() {
  const matchedRoutes = useMatches();
  const match = useMatchRoute();
  return (
    <Breadcrumbs>
      {matchedRoutes
        .filter((r) => r.id !== "__root__" && r.staticData.title)
        .map((route) => {
          return (
            <MuiLink
              disabled={match({ to: route.pathname }) as boolean}
              component={Link}
              to={route.fullPath}
              underline="none"
              color={
                match({ to: route.pathname }) ? "textDisabled" : "textPrimary"
              }
            >
              {route.staticData.title}
            </MuiLink>
          );
        })}
    </Breadcrumbs>
  );
}
