import { Components, Theme } from '@mui/material';

export const MuiOutlinedInput: Components<Theme>['MuiOutlinedInput'] = {
  styleOverrides: {
    root: (t) => ({
      borderRadius: "4px",
      backgroundColor:
        t.ownerState.variant === 'outlined'
          ? t.theme.palette.background.default
          : 'transparent',
    }),
  },
};
