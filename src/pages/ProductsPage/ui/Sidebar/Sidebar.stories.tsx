import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { Sidebar } from './Sidebar';

const meta = {
  title: 'pages/ProductsPage/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
Primary.decorators = [StoreDecorator({
  category: {
    categories: [
      'electronics',
      'jewelery',
      "men's clothing",
      "women's clothing",
    ],
  },
})];
