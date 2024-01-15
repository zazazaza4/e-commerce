import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { EmailFormOrder } from './EmailFormOrder';

const meta = {
  title: 'feature/EmailFormOrder',
  component: EmailFormOrder,
  tags: ['autodocs'],
  args: {
    onSubmit: () => {},
  },
  argTypes: {},
} satisfies Meta<typeof EmailFormOrder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
Primary.decorators = [
  StoreDecorator({}),
];

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};
Disabled.decorators = [
  StoreDecorator({}),
];
