import type { Meta, StoryObj } from '@storybook/react';

import { PageContainerDecorator } from 'shared/config/storybook/PageContainerDecorator/PageContainerDecorator';

import NotFoundPage from './NotFoundPage';

const meta = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
Primary.decorators = [
  PageContainerDecorator,
];
