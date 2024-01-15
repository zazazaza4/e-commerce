import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { productActions } from '../../slice/productSlice';
import { fetchProductById } from './fetchProductById';

describe('fetchProductById.test', () => {
  test('successful product fetch', async () => {
    const productId = '1';
    const productValue = { id: '1', title: 'Product 1', price: 10.99 };

    const thunk = new TestAsyncThunk(fetchProductById);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: productValue }));
    const result = await thunk.callThunk(productId);

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.get).toHaveBeenCalledWith(`/products/${productId}`);
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(productValue);
  });

  test('failed product fetch', async () => {
    const productId = '1';

    const thunk = new TestAsyncThunk(fetchProductById);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 404 }));
    const result = await thunk.callThunk(productId);

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.get).toHaveBeenCalledWith(`/products/${productId}`);
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error.fetching');
  });
});
