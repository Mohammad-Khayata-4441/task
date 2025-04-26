import { Components, Theme } from "@mui/material";

export const MuiCssBaseline: Components<Theme>["MuiCssBaseline"] = {
  styleOverrides(theme) {
    return {
      // '*::-webkit-scrollbar': {
      //   width: '8px',
      //   height: '8px',
      // },
      // '*::-webkit-scrollbar-track': {},
      // '*::-webkit-scrollbar-thumb': {
      //   outline: `1px solid ${theme.palette.divider}`,
      //   background: {
      //     dark: theme.palette.grey[900],
      //     light: theme.palette.grey[400],
      //   }[theme.palette.mode],
      // },
    };
  },
};
