import type { Meta, StoryObj } from '@storybook/react';

import { SelectedProductItem } from './SelectedProductItem';

const meta = {
  title: 'pages/CheckoutPage/SelectedProductItem',
  component: SelectedProductItem,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SelectedProductItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    product: {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      quantity: 1,
    },
  },
};
