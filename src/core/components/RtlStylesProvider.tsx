// RtlStylesProvider.tsx
"use client";

import { PropsWithChildren, useMemo } from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

interface RtlStylesProviderProps extends PropsWithChildren {
  direction?: "ltr" | "rtl";
}

export default function RtlStylesProvider({
  children,
  direction = "ltr", // default to LTR if no direction is provided
}: RtlStylesProviderProps) {
  // Create a list of plugins. Always include the prefixer.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const stylisPlugins = [prefixer];

  // If the direction is RTL, add the rtlPlugin.
  if (direction === "rtl") {
    stylisPlugins.push(rtlPlugin);
  }

  // Memoize the cache so that it doesn't get recreated on every render.
  const cache = useMemo(
    () =>
      createCache({
        key: direction === "rtl" ? "mui-rtl" : "mui", // use a unique key for rtl vs ltr
        stylisPlugins,
        prepend: true,
      }),
    [direction, stylisPlugins]
  );

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
