import type { Meta, StoryObj } from '@storybook/react';

import ProductPage from './ProductDetailsPage';

const meta = {
  title: 'pages/ProductPage',
  component: ProductPage,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ProductPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
