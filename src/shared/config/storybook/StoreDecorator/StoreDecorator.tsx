import { Reducer } from '@reduxjs/toolkit';
import { Decorator } from '@storybook/react';

import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';

import { productsReducer } from 'pages/ProductsPage';

import { emailReducer } from 'features/SendEmail';

type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
}

const defaultAsyncReducers: ReducersList = {
  email: emailReducer,
  product: productsReducer,
};

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList,
): Decorator => (Story) => (
  <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
    <Story />
  </StoreProvider>
);
