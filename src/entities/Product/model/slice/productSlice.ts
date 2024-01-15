import { createSlice } from '@reduxjs/toolkit';

import { fetchProductById } from '../services/fetchProductById/fetchProductById';
import { ProductSchema } from '../types/product';

const initialState: ProductSchema = {
  isLoading: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
        state.error = '';
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { actions: productActions } = productSlice;
export const { reducer: productReducer } = productSlice;
