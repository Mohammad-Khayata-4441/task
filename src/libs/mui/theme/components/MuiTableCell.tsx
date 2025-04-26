import { Components, Theme } from '@mui/material';

export const MuiTableCell: Components<Theme>['MuiTableCell'] = {
  styleOverrides: {
    root: (t) => ({
      borderBottom: `1px solid ${t.theme.palette.divider}`,
    }),
  },
};
