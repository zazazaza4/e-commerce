import { createSlice } from '@reduxjs/toolkit';

import { fetchProducts } from '../services/fetchProducts';
import { ProductsSchema } from '../types/products';

const initialState: ProductsSchema = {
  products: [],
  isLoading: false,
  error: '',
  filteredProducts: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    searchProducts: (state, action) => {
      const query = action.payload.toLowerCase();
      state.filteredProducts = state.products?.filter((item) => item.title.toLowerCase().includes(query));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
        state.filteredProducts = action.payload;
        state.error = '';
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.products = [];
        state.filteredProducts = [];
        state.error = action.error.message;
      });
  },
});

export const { actions: productsActions } = productsSlice;
export const { reducer: productsReducer } = productsSlice;
