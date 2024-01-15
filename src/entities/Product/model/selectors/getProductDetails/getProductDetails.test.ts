import { StateSchema } from 'app/providers/StoreProvider';

import { getProductDetails } from './getProductDetails';

describe('getProductDetails.test', () => {
  test('should return product details', () => {
    const productDetails = {
      id: 1,
      price: 12,
      description: 'test',
      title: 'test',
    };

    const state: DeepPartial<StateSchema> = {
      product: {
        product: productDetails,
      },
    };
    expect(getProductDetails(state as StateSchema)).toEqual(productDetails);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProductDetails(state as StateSchema)).toEqual(undefined);
  });
});
