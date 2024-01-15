import type { Meta, StoryObj } from '@storybook/react';

import { PageContainerDecorator } from 'shared/config/storybook/PageContainerDecorator/PageContainerDecorator';

import ComingSoonPage from './ComingSoonPage';

const meta = {
  title: 'pages/ComingSoonPage',
  component: ComingSoonPage,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ComingSoonPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
Primary.decorators = [
  PageContainerDecorator,
];
