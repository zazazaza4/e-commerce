import type { Meta, StoryObj } from '@storybook/react';

import { NavbarItemList } from '../../model/items';
import { DrawerContent } from './DrawerContent';

const meta = {
  title: 'widgets/Navbar/DrawerContent',
  component: DrawerContent,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof DrawerContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    lists: NavbarItemList,
  },
};
