import type { Meta, StoryObj } from '@storybook/react';

import { CartItem } from './CartItem';

const meta = {
  title: 'feature/Cart/CartItem',
  component: CartItem,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CartItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    item: {
      id: 1,
      title: 'Sample Product',
      price: 10,
      quantity: 2,
    },
    handleAddProduct: () => {},
    handleDeleteProduct: () => {},
    handleDeleteAllProduct: () => {},
  },
};
