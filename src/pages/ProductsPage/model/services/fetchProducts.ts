import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/StoreProvider';

import { Product } from 'entities/Product';

export const fetchProducts = createAsyncThunk<Product[], void, ThunkConfig<string>>(
  'product/fetchProducts',
  async (_, { extra, rejectWithValue, getState }) => {
    const category = getState().category.selectedCategory || '';

    let URL = '/products';
    if (category) {
      URL += `/category/${category}`;
    }

    try {
      const response = await extra.api.get<Product[]>(URL);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      return rejectWithValue('error.fetching');
    }
  },
);
