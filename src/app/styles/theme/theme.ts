import { Theme } from '@emotion/react';
import { createTheme } from '@mui/material';

export enum Colors {
  PRIMARY = '#1D8176',
  SECONDARY = '#e53935',
  PRIMARY_LIGHT = '#4a9a91',
  PRIMARY_DARK = '#145a52',
  SECONDARY_LIGHT = '#ff8f6d',
  SECONDARY_DARK = '#b25133',
  WHITE = '#fff',
  BLACK = '#363636',
  GRAY_LIGHT = '#bdbdbd',
  GRAY_DARK = '#535353',
}

export enum ThemeType {
  DEFAULT = 'default',
}

const createThemeFromColors = (colors: typeof Colors): Theme => createTheme({
  palette: {
    primary: {
      main: colors.PRIMARY,
      light: colors.PRIMARY_LIGHT,
      dark: colors.PRIMARY_DARK,
    },
    secondary: {
      main: colors.SECONDARY,
      light: colors.SECONDARY_LIGHT,
      dark: colors.SECONDARY_DARK,
    },
    common: {
      white: colors.WHITE,
      black: colors.BLACK,
    },
  },
});

const defaultTheme = createThemeFromColors(Colors);

export const themes: Record<ThemeType, Theme> = {
  [ThemeType.DEFAULT]: defaultTheme,
};
