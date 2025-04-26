import { Components, Theme } from '@mui/material';

export const MuiSelect: Components<Theme>['MuiSelect'] = {
  defaultProps: {
    variant: 'outlined',
    size: 'small',
  },
  styleOverrides: {
    root: {
      '& .MuiSelect-select': {
        padding: '0.375rem 0.5rem', // Padding for consistent spacing
      },
    },
  },
};
