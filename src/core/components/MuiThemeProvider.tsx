import { PropsWithChildren, useContext, useEffect, useMemo } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { ColorModeContext } from "@/modules/common/hooks/useDarkMode";
import { MuiTheme } from "@/libs/mui/theme";

export default function MuiThemeProvider(props: PropsWithChildren) {
  const { mode } = useContext(ColorModeContext);
  const isDarkMode = useMemo(() => mode === "dark", [mode]);
  const activeTheme = useMemo(
    () => MuiTheme(isDarkMode ? "dark" : "light"),
    [isDarkMode]
  );
  useEffect(() => {
    if (isDarkMode) document.querySelector("html")?.classList.add("dark");
    else document.querySelector("html")?.classList.remove("dark");
    console.log("active theme :  ", activeTheme);
  }, [activeTheme, isDarkMode]);
  console.log("mui theme provider");
  return <ThemeProvider theme={activeTheme}>{props.children}</ThemeProvider>;
}
