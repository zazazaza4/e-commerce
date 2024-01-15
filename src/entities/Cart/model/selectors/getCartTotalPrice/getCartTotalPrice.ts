import { createSelector } from '@reduxjs/toolkit';

import { getCartProducts } from '../getCartProducts/getCartProducts';

export const getCartTotalPrice = createSelector(
  [getCartProducts],
  (cart) => cart?.reduce((total, product) => total + product.quantity * product.price, 0) || 0,
);
