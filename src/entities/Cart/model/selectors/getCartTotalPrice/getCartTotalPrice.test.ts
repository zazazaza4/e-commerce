import { StateSchema } from 'app/providers/StoreProvider';

import { getCartTotalPrice } from './getCartTotalPrice';

describe('getCartTotalPrice test', () => {
  test('should return the total price of cart products', () => {
    const mockCartProducts = [
      {
        id: 1, title: 'Product 1', price: 10.99, quantity: 2,
      },
      {
        id: 2, title: 'Product 2', price: 15.99, quantity: 1,
      },
    ];

    const state: DeepPartial<StateSchema> = {
      cart: {
        cartProducts: mockCartProducts,
      },
    };

    // Total price calculation: (10.99 * 2) + (15.99 * 1) = 37.97
    expect(getCartTotalPrice(state as StateSchema)).toEqual(37.97);
  });

  test('should return 0 with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getCartTotalPrice(state as StateSchema)).toEqual(0);
  });
});
