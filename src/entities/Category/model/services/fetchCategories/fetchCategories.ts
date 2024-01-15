import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/StoreProvider';

import { Category } from '../../types/category';

export const fetchCategories = createAsyncThunk<Category[], void, ThunkConfig<string>>(
  'category/fetchCategories',
  async (_, { extra, rejectWithValue }) => {
    try {
      const response = await extra.api.get<Category[]>('/products/categories');

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      return rejectWithValue('error.fetching');
    }
  },
);
