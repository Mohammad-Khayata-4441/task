import { Components, Theme } from '@mui/material';

export const MuiAutocomplete: Components<Theme>['MuiAutocomplete'] = {
  styleOverrides: {
    root: {
      '& .MuiInputBase-root': {
        minHeight: '2.25rem', // Match with TextField and Select
      },
      '& .MuiAutocomplete-inputRoot': {
        padding: '0.375rem 0.5rem', // Input padding
      },
    },
    paper: {
      // maxHeight: '200px', // Limit dropdown height
      // overflow: 'auto', // Enable scrolling
    },
  },
};
