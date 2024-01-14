import { Box } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import { LangSwitcher } from './LangSwitcher';

const meta = {
  title: 'widgets/LangSwitcher',
  component: LangSwitcher,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof LangSwitcher>;

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
