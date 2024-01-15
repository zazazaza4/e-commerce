import { StateSchema } from 'app/providers/StoreProvider';

import { getCartProducts } from './getCartProducts';

describe('getCartProducts test', () => {
  test('should return the cart products', () => {
    const mockCartProducts = [
      { id: 1, title: 'Product 1', price: 10.99 },
      { id: 2, title: 'Product 2', price: 15.99 },
    ];

    const state: DeepPartial<StateSchema> = {
      cart: {
        cartProducts: mockCartProducts,
      },
    };

    expect(getCartProducts(state as StateSchema)).toEqual(mockCartProducts);
  });

  test('should return an empty array with empty state', () => {
    const state = {};

    expect(getCartProducts(state as StateSchema)).toEqual([]);
  });
});
