import { StateSchema } from 'app/providers/StoreProvider';

import { getCartItemCount } from './getCartItemCount';

describe('getCartItemCount test', () => {
  test('should return the correct cart item count', () => {
    const state: DeepPartial<StateSchema> = {
      cart: {
        cartProducts: [
          { id: 1, quantity: 2 },
          { id: 2, quantity: 3 },
          { id: 3, quantity: 1 },
        ],
      },
    };

    expect(getCartItemCount(state as StateSchema)).toEqual(6);
  });

  test('should return 0 when the cart is empty', () => {
    const state: DeepPartial<StateSchema> = {
      cart: {
        cartProducts: [],
      },
    };

    expect(getCartItemCount(state as StateSchema)).toEqual(0);
  });

  test('should return 0 with empty state', () => {
    const state = {};

    expect(getCartItemCount(state as StateSchema)).toEqual(0);
  });
});
