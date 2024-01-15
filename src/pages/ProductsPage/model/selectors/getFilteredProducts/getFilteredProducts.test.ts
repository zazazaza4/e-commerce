import { StateSchema } from 'app/providers/StoreProvider';

import { getFilteredProducts } from './getFilteredProducts';

describe('getFilteredProducts test', () => {
  test('should return filtered products', () => {
    const filteredProducts = [
      { id: 1, title: 'Product 1' },
      { id: 2, title: 'Product 2' },
    ];

    const state: DeepPartial<StateSchema> = {
      products: {
        filteredProducts,
      },
    };

    expect(getFilteredProducts(state as StateSchema)).toEqual(filteredProducts);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getFilteredProducts(state as StateSchema)).toEqual([]);
  });
});
