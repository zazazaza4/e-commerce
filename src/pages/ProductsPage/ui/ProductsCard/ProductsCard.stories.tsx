import type { Meta, StoryObj } from '@storybook/react';

import { Product } from 'entities/Product';

import { ProductsCard } from './ProductsCard';

const meta = {
  title: 'pages/ProductsPage/ProductsCard',
  component: ProductsCard,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ProductsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    product: {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      description: 'Your perfect pack for everyday use and walks in the forest',
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    onAddToCart: (product: Product) => console.log('Add to cart', product),
  },
};
