import { StateSchema } from 'app/providers/StoreProvider';

import { getProducts } from './getProducts';

describe('getProducts test', () => {
  test('should return products', () => {
    const products = [
      { id: 1, title: 'Product 1' },
      { id: 2, title: 'Product 2' },
    ];

    const state: DeepPartial<StateSchema> = {
      products: {
        products,
      },
    };

    expect(getProducts(state as StateSchema)).toEqual(products);
  });

  test('should return an empty array with no products', () => {
    const state: DeepPartial<StateSchema> = {
      products: {
        products: undefined,
      },
    };

    expect(getProducts(state as StateSchema)).toEqual([]);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProducts(state as StateSchema)).toEqual([]);
  });
});
