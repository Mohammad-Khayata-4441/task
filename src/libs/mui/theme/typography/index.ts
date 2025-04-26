import { ThemeOptions } from '@mui/material';

export const typography: ThemeOptions['typography'] = {
  fontFamily: `"montserrat", "almarai", "Arial", sans-serif`,
  htmlFontSize: 16, // Base 16px (1rem = 16px)

  h1: {
    fontSize: '6rem', // 96px
    lineHeight: 1.1667, // 112/96
    letterSpacing: '-0.09375rem', // -1.5px
    fontWeight: 300,
  },
  h2: {
    fontSize: '3.75rem', // 60px
    lineHeight: 1.2, // 72/60
    letterSpacing: '-0.03125rem', // -0.5px
    fontWeight: 300,
  },
  h3: {
    fontSize: '3rem', // 48px
    lineHeight: 1.1667, // 56/48
    letterSpacing: 0,
    fontWeight: 400,
  },
  h4: {
    fontSize: '2.125rem', // 34px
    lineHeight: 1.1765, // 40/34
    letterSpacing: '0.015625rem', // 0.25px
    fontWeight: 400,
  },
  h5: {
    fontSize: '1.5rem', // 24px
    lineHeight: 1.3333, // 32/24
    letterSpacing: 0,
    fontWeight: 400,
  },
  h6: {
    fontSize: '1.25rem', // 20px
    lineHeight: 1.6, // 32/20
    letterSpacing: '0.009375rem', // 0.15px
    fontWeight: 500,
  },

  // Subtitles
  subtitle1: {
    fontSize: '1rem', // 16px
    lineHeight: 1.75, // 28/16
    letterSpacing: '0.009375rem', // 0.15px
    fontWeight: 400,
  },
  subtitle2: {
    fontSize: '0.875rem', // 14px
    lineHeight: 1.5714, // 22/14
    letterSpacing: '0.00625rem', // 0.1px
    fontWeight: 500,
  },

  // Body Text
  body1: {
    fontSize: '1rem', // 16px
    lineHeight: 1.5, // 24/16
    letterSpacing: '0.03125rem', // 0.5px
    fontWeight: 400,
  },
  body2: {
    fontSize: '0.875rem', // 14px
    lineHeight: 1.4286, // 20/14
    letterSpacing: '0.015625rem', // 0.25px
    fontWeight: 400,
  },

  // Button
  button: {
    fontSize: '0.875rem', // 14px
    // lineHeight: 1.1429, // 16/14
    letterSpacing: '0.078125rem', // 1.25px
    textTransform: 'uppercase',
    fontWeight: 500,
  },

  // Caption
  caption: {
    fontSize: '0.75rem', // 12px
    lineHeight: 1.6667, // 20/12
    letterSpacing: '0.025rem', // 0.4px
    fontWeight: 400,
  },

  // Overline
  overline: {
    fontSize: '0.625rem', // 10px
    lineHeight: 1.6, // 16/10
    letterSpacing: '0.09375rem', // 1.5px
    textTransform: 'uppercase',
    fontWeight: 400,
  },
};
