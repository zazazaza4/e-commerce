import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { ProductDetails } from './ProductDetails';

const meta = {
  title: 'entities/ProductDetails',
  component: ProductDetails,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ProductDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: '1',
  },
};
Primary.decorators = [StoreDecorator({
  product: {
    product: {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      description: 'Your perfect pack for everyday',
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      rating: {
        rate: 3.9,
        count: 120,
      },

    },
  },
})];

export const NotFound: Story = {
  args: {
    id: '1',
  },
};
NotFound.decorators = [StoreDecorator({})];

export const Loading: Story = {
  args: {
    id: '1',
  },
};
Loading.decorators = [StoreDecorator({
  product: {
    isLoading: true,
  },
})];
