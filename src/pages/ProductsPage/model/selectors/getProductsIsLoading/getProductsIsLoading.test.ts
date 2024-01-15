import { StateSchema } from 'app/providers/StoreProvider';

import { getProductsIsLoading } from './getProductsIsLoading';

describe('getProductsIsLoading test', () => {
  test('should return true when products are loading', () => {
    const state: DeepPartial<StateSchema> = {
      products: {
        isLoading: true,
      },
    };

    expect(getProductsIsLoading(state as StateSchema)).toEqual(true);
  });

  test('should return false when products are not loading', () => {
    const state: DeepPartial<StateSchema> = {
      products: {
        isLoading: false,
      },
    };

    expect(getProductsIsLoading(state as StateSchema)).toEqual(false);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProductsIsLoading(state as StateSchema)).toEqual(false);
  });
});
