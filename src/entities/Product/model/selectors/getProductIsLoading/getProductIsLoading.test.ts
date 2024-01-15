import { StateSchema } from 'app/providers/StoreProvider';

import { getProductIsLoading } from './getProductIsLoading';

describe('getProductIsLoading.test', () => {
  test('should return loading status', () => {
    const state: DeepPartial<StateSchema> = {
      product: {
        isLoading: true,
      },
    };
    expect(getProductIsLoading(state as StateSchema)).toEqual(true);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProductIsLoading(state as StateSchema)).toEqual(undefined);
  });
});
