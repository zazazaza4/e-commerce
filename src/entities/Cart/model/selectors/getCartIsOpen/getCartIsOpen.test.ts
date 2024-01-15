import { StateSchema } from 'app/providers/StoreProvider';

import { getCartIsOpen } from './getCartIsOpen';

describe('getCartIsOpen test', () => {
  test('should return cart isOpen state', () => {
    const state: DeepPartial<StateSchema> = {
      cart: {
        isOpen: true,
      },
    };

    expect(getCartIsOpen(state as StateSchema)).toEqual(true);
  });

  test('should work with empty state', () => {
    const state = {};

    expect(getCartIsOpen(state as StateSchema)).toEqual(false);
  });
});
