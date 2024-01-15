import { Box } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import { Logo } from './Logo';

const meta = {
  title: 'shared/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
Primary.decorators = [
  (Story) => (
    <Box sx={{ backgroundColor: 'primary.main', padding: '20px' }}>
      <Story />
    </Box>
  ),
];
