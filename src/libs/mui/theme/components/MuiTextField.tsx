import { Components, Theme } from "@mui/material";

export const MuiTextField: Components<Theme>["MuiTextField"] = {
  defaultProps: {
    variant: "outlined",
    size: "small",
  },
  styleOverrides: {
    root: {
      "& fieldset": {
        border: "none",
      },
      "& .MuiInputBase-root": {
        borderRadius: "10px",
        backgroundColor: "#eeeeee",
        minHeight: "2.25rem", // Adjusted for better alignment
        padding: "0 0.75rem",
        position: "relative",
        border: "none",
        "&.MuiInputBase-multiline": {
          padding: "0.375rem 0.75rem", // Ensure no extra padding for multiline inputs
          minHeight: "3rem", // Minimum height for multiline
        },
        "& .MuiInputBase-input": {
          height: "1.25rem", // Adjusted to avoid text overflow
          padding: "0.375rem 0", // Padding for consistent spacing
        },
      },
    },
  },
};
