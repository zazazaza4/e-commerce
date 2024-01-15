import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { fetchProducts } from './fetchProducts';

describe('fetchProducts.test', () => {
  test('successful product fetch', async () => {
    const productsValue = [
      { id: '1', title: 'Product 1', price: 10.99 },
      { id: '2', title: 'Product 2', price: 19.99 },
    ];

    const thunk = new TestAsyncThunk(fetchProducts, { category: {} });
    thunk.api.get.mockReturnValue(Promise.resolve({ data: productsValue }));

    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(productsValue);
  });

  test('failed product fetch', async () => {
    const thunk = new TestAsyncThunk(fetchProducts, { category: {} });
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 404 }));

    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error.fetching');
  });

  test('successful product fetch with selected category', async () => {
    const productsValue = [
      { id: '3', title: 'Product 3', price: 15.99 },
      { id: '4', title: 'Product 4', price: 25.99 },
    ];

    const selectedCategory = 'electronics';

    const thunk = new TestAsyncThunk(fetchProducts, { category: { selectedCategory } });
    thunk.api.get.mockReturnValue(Promise.resolve({ data: productsValue }));

    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(productsValue);
  });
});
