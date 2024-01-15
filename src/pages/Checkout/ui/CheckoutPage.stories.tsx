import type { Meta, StoryObj } from '@storybook/react';

import { PageContainerDecorator } from 'shared/config/storybook/PageContainerDecorator/PageContainerDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import CheckoutPage from './CheckoutPage';

const meta = {
  title: 'pages/CheckoutPage',
  component: CheckoutPage,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CheckoutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
Primary.decorators = [
  PageContainerDecorator,
  StoreDecorator({
    cart: {
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

export const Empty: Story = {};
Empty.decorators = [
  PageContainerDecorator,
  StoreDecorator({}),
];

export const Error: Story = {};
Error.decorators = [
  PageContainerDecorator,
  StoreDecorator({
    email: {
      error: 'error',
    },
  }),
];

export const Success: Story = {};
Success.decorators = [
  PageContainerDecorator,
  StoreDecorator({
    email: {
      isEmailSent: true,
    },
  }),
];

export const Loading: Story = {};
Loading.decorators = [
  PageContainerDecorator,
  StoreDecorator({
    email: {
      isLoading: true,
    },
  }),
];
