import { colors } from './colors';
import { PaletteMode, PaletteOptions } from '@mui/material';

const dark: PaletteOptions = {
  mode: 'dark',
  primary: {
    main: colors.primary[500],
    ...colors.primary,
    '100': colors.primary[100],
    '200': colors.primary[200],
    '300': colors.primary[300],
    '400': colors.primary[400],
    '500': colors.primary[500],
    '600': colors.primary[600],
    '700': colors.primary[700],
    '800': colors.primary[800],
    '900': colors.primary[900],
  },
  secondary: {
    main: colors.secondary[500],
    ...colors.secondary,
  },
  background: {
    default: colors.darkBackgroundDefault,
    paper: colors.darkBackgroundPaper,
  },
  text: {
    primary: colors.darkTextPrimary,
    secondary: colors.darkTextSecondary,
  },
  divider: colors.darkDivider,
};

const light: PaletteOptions = {
  primary: {
    ...colors.primary,
    main: colors.primary[700],
    '100': colors.primary[100],
    '200': colors.primary[200],
    '300': colors.primary[300],
    '400': colors.primary[400],
    '500': colors.primary[500],
    '600': colors.primary[600],
    '700': colors.primary[700],
    '800': colors.primary[800],
    '900': colors.primary[900],
  },
  secondary: {
    main: colors.secondary[700],

    ...colors.secondary,
  },
  background: {
    default: colors.lightBackgroundDefault,
    paper: colors.lightBackgroundPaper,
  },
  text: {
    primary: colors.lightTextPrimary,
    secondary: colors.lightTextSecondary,
  },
  divider: colors.lightDivider,
};

export const palette: Record<PaletteMode, PaletteOptions> = {
  dark,
  light,
};
