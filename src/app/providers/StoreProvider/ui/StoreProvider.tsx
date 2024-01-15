import {
  FC, memo, ReactNode, useMemo,
} from 'react';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ReducersMapObject } from '@reduxjs/toolkit';

import { subscribeToCartChanges } from 'entities/Cart';

import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider: FC<StoreProviderProps> = memo(({
  children,
  initialState,
  asyncReducers,
}: StoreProviderProps) => {
  const navigate = useNavigate();

  const store = useMemo(() => createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>,
    navigate,
  // eslint-disable-next-line react-hooks/exhaustive-deps
  ), []);

  subscribeToCartChanges(store);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
});
