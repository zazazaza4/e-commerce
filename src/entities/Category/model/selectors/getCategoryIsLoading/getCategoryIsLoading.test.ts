import { StateSchema } from 'app/providers/StoreProvider';

import { getCategoryIsLoading } from './getCategoryIsLoading';

describe('getCategoryIsLoading.test', () => {
  test('should return category loading state when available in the state', () => {
    const state: DeepPartial<StateSchema> = {
      category: {
        isLoading: true,
      },
    };

    expect(getCategoryIsLoading(state as StateSchema)).toEqual(true);
  });

  test('should return false when category loading state is not available in the state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getCategoryIsLoading(state as StateSchema)).toEqual(false);
  });
});
