import { Components, Theme } from '@mui/material';

export const MuiDialog: Components<Theme>['MuiDialog'] = {
  styleOverrides: {
    paper: () => ({
      borderRadius: '8px',
    }),
  },
};
