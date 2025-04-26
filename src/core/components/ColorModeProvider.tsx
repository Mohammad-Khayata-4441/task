import {
  ColorModeContext,
  useDarkMode,
} from "@/modules/common/hooks/useDarkMode";
import { PropsWithChildren } from "react";

export default function ColorModeProvider(props: PropsWithChildren) {
  const { mode, setMode } = useDarkMode();
  return (
    <ColorModeContext.Provider value={{ mode, setMode }}>
      {props.children}
    </ColorModeContext.Provider>
  );
}
