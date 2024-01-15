import type { Meta, StoryObj } from '@storybook/react';

import { CategoryForm } from './CategoryForm';

const meta = {
  title: 'entities/CategoryForm',
  component: CategoryForm,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CategoryForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Category',
    categories: [
      'electronics',
      'jewelery',
      "men's clothing",
      "women's clothing",
    ],
  },
};

export const NoCategories: Story = {
  args: {
    title: 'No categories',
  },
};
