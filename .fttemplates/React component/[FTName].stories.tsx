import type { Meta, StoryObj } from '@storybook/react';

import { [FTName] } from './[FTName]';

const meta = {
  title: 'shared/[FTName]',
  component: [FTName],
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof [FTName]>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
