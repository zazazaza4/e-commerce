import { ThemeProvider } from '@mui/material';
import { Decorator } from '@storybook/react';

import { themes } from 'app/styles/theme/theme';

export const ThemeDecorator: Decorator = (Story) => (
  <ThemeProvider theme={themes.default}>
    <Story />
  </ThemeProvider>
);
