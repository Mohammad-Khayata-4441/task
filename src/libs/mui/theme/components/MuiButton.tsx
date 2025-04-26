import { Components, Theme } from '@mui/material';

export const MuiButton: Components<Theme>['MuiButton'] = {
  defaultProps: {
    size: 'medium',
  },
  styleOverrides: {
    root: () => ({
      borderRadius: '4px',
      minWidth: '100px',
      boxShadow: 'none',
    }),
    sizeSmall: {
      minHeight: 30,
    },
  },
};
