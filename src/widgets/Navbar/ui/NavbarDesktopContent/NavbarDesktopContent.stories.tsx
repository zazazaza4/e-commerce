import { Box } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { NavbarItemList } from '../../model/items';
import { NavbarDesktopContent } from './NavbarDesktopContent';

const meta = {
  title: 'widgets/Navbar/NavbarDesktopContent',
  component: NavbarDesktopContent,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof NavbarDesktopContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    lists: NavbarItemList,
  },
};
Primary.decorators = [
  (Story) => (
    <Box sx={{ backgroundColor: 'primary.main', padding: '20px' }}>
      <Story />
    </Box>
  ),
  StoreDecorator({}),
];
