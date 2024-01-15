import { StateSchema } from 'app/providers/StoreProvider';

import { getEmailIsEmailSent } from './getEmailIsEmailSent';

describe('getEmailIsEmailSent', () => {
  test('should return isEmailSent state', () => {
    const state: DeepPartial<StateSchema> = {
      email: {
        isEmailSent: true,
      },
    };

    expect(getEmailIsEmailSent(state as StateSchema)).toEqual(true);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getEmailIsEmailSent(state as StateSchema)).toBeUndefined();
  });
});
