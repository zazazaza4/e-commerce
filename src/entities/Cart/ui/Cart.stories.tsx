import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { Cart } from './Cart';

const meta = {
  title: 'feature/Cart',
  component: Cart,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Cart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

Primary.decorators = [
  StoreDecorator({
    cart: {
      isOpen: true,
      cartProducts: [
        {
          id: 1,
          title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
          price: 109.95,
          category: "men's clothing",
          image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
          quantity: 1,
        },
        {
          id: 2,
          title: 'Foldsack No. 1 Backpack, Fits 15 Laptops',
          price: 109.95,
          category: "men's clothing",
          image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
          quantity: 4,
        },
      ],
    },
  }),
];
