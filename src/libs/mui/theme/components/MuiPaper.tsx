import { Components, Theme } from '@mui/material';

export const MuiPaper: Components<Theme>['MuiPaper'] = {
  defaultProps: {
    elevation: 0,
    variant: 'outlined',
  },
  styleOverrides: {
    root: {
      borderRadius: '8px',
    },
  },
};
