import { createSelector } from '@reduxjs/toolkit';

import { getCartProducts } from '../getCartProducts/getCartProducts';

export const getCartItemCount = createSelector(
  [getCartProducts],
  (cart) => cart?.reduce((sum, c) => sum + c.quantity, 0) || 0,
);
