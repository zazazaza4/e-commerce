import { StateSchema } from 'app/providers/StoreProvider';

import { getSelectedCategory } from './getSelectedCategory';

describe('getSelectedCategory.test', () => {
  test('should return selected category when available in the state', () => {
    const selectedCategory = 'electronics';

    const state: DeepPartial<StateSchema> = {
      category: {
        selectedCategory,
      },
    };

    expect(getSelectedCategory(state as StateSchema)).toEqual(selectedCategory);
  });

  test('should return undefined when selected category is not available in the state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getSelectedCategory(state as StateSchema)).toEqual(undefined);
  });
});
