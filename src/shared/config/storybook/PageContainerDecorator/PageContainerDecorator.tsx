import { Decorator } from '@storybook/react';

import { PageContainer } from 'app/styles';

export const PageContainerDecorator: Decorator = (Story) => (
  <PageContainer>
    <Story />
  </PageContainer>
);
