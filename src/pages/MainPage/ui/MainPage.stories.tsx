import type { Meta, StoryObj } from '@storybook/react';

import { PageContainerDecorator } from 'shared/config/storybook/PageContainerDecorator/PageContainerDecorator';

import MainPage from './MainPage';

const meta = {
  title: 'pages/MainPage',
  component: MainPage,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
Primary.decorators = [
  PageContainerDecorator,
];
