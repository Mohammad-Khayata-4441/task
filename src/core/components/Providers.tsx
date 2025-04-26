import { PropsWithChildren } from "react";
// import { QueryClientProvider } from "@tanstack/react-query";
// import { queryCleint } from "@/plugins";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { Toaster } from "react-hot-toast";
import MuiThemeProvider from "./MuiThemeProvider";
import ColorModeProvider from "./ColorModeProvider";
import RtlStylesProvider from "./RtlStylesProvider";
import { useTranslation } from "react-i18next";

export default function AppProviders(props: PropsWithChildren) {
  const { i18n } = useTranslation();
  return (
    <>
      {/* <QueryClientProvider client={queryCleint}> */}
      <ColorModeProvider>
        <MuiThemeProvider>
          <RtlStylesProvider direction={i18n.dir(i18n.language)}>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              {props.children}
            </LocalizationProvider>
            <Toaster></Toaster>
          </RtlStylesProvider>
        </MuiThemeProvider>
      </ColorModeProvider>
      {/* </QueryClientProvider> */}
    </>
  );
}
