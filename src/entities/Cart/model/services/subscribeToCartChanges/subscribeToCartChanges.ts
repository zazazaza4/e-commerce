import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';

import { StateSchema } from 'app/providers/StoreProvider';

import { LOCAL_STORAGE_CART_STATE } from 'shared/const/localStorage';

export const subscribeToCartChanges = (store: ToolkitStore<StateSchema>) => {
  store.subscribe(() => {
    const newCartState = store.getState().cart;
    localStorage.setItem(LOCAL_STORAGE_CART_STATE, JSON.stringify(newCartState));
  });
};
