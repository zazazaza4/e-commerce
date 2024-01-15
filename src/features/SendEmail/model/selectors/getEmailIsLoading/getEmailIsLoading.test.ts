import { StateSchema } from 'app/providers/StoreProvider';

import { getEmailIsLoading } from './getEmailIsLoading';

describe('getEmailIsLoading', () => {
  test('should return isLoading state', () => {
    const state: DeepPartial<StateSchema> = {
      email: {
        isLoading: true,
      },
    };

    expect(getEmailIsLoading(state as StateSchema)).toEqual(true);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getEmailIsLoading(state as StateSchema)).toEqual(false);
  });
});
