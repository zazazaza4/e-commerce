import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchCategories } from '../services/fetchCategories/fetchCategories';
import { Category, CategorySchema } from '../types/category';

const initialState: CategorySchema = {
  isLoading: false,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<Category>) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
        state.error = '';
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.categories = [];
        state.error = action.error.message;
      });
  },
});

export const { actions: categoryActions } = categorySlice;
export const { reducer: categoryReducer } = categorySlice;
