import { StateSchema } from 'app/providers/StoreProvider';

import { getEmailError } from './getEmailError';

describe('getEmailError', () => {
  test('should return email error state', () => {
    const state: DeepPartial<StateSchema> = {
      email: {
        error: 'Invalid email format',
      },
    };

    expect(getEmailError(state as StateSchema)).toEqual('Invalid email format');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getEmailError(state as StateSchema)).toBeUndefined();
  });
});
