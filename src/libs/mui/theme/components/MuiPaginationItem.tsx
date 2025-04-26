import { alpha, Components, Theme } from "@mui/material";

export const MuiPaginationItem: Components<Theme>["MuiPaginationItem"] = {
  styleOverrides: {
    root: (t) => ({
      borderRadius: "8px",
      margin: "0rem 0.1rem",
      "&.Mui-selected": {
        zIndex: "10",
        fontSize: 12,
        fontWeight: "bold",
        backgroundColor: alpha(t.theme.palette.primary.main, 0.2),
        color: t.theme.palette.primary.main,
      },
    }),
  },
};
