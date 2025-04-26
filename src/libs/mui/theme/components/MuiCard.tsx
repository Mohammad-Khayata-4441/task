import { Components, Theme } from "@mui/material";

export const MuiCard: Components<Theme>["MuiCard"] = {
  styleOverrides: {
    root: () => ({
      borderRadius: "20px",
    }),
  },
};
