import { StateSchema } from 'app/providers/StoreProvider';

import { getCategories } from './getCategories';

describe('getCategories.test', () => {
  test('should return state', () => {
    const categories = ['electronics', 'jewelry', "men's clothing", "women's clothing"];

    const state: DeepPartial<StateSchema> = {
      category: {
        categories,
      },
    };

    expect(getCategories(state as StateSchema)).toEqual(categories);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getCategories(state as StateSchema)).toEqual(undefined);
  });
});
