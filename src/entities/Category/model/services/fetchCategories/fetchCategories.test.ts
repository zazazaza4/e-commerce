import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { fetchCategories } from './fetchCategories';

describe('fetchCategories.test', () => {
  test('successful category fetch', async () => {
    const categoriesValue = ['Electronics', 'Clothing'];

    const thunk = new TestAsyncThunk(fetchCategories);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: categoriesValue }));
    const result = await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.get).toHaveBeenCalledWith('/products/categories');
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(categoriesValue);
  });

  test('failed category fetch', async () => {
    const thunk = new TestAsyncThunk(fetchCategories);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 404 }));
    const result = await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.get).toHaveBeenCalledWith('/products/categories');
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error.fetching');
  });
});
