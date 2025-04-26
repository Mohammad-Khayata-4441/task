import { createTheme, Palette, responsiveFontSizes } from '@mui/material';
import { palette } from './palette';
import { breakpoints } from './breakpoints';
import { typography } from './typography';
import { components } from './components';
import i18n from '@/libs/i18n';

export const MuiTheme = (mode: Palette['mode']) =>
  responsiveFontSizes(
    createTheme({
      cssVariables: true,
      direction: i18n.dir(i18n.language),
      palette: palette[mode],
      breakpoints,
      typography,
      components,
    }),
  );
