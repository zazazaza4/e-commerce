import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Product } from 'entities/Product';

import { showToast } from 'shared/lib/showToast/showToast';

import { CartSchema } from '../types/cart';

const loadCartFromLocalStorage = (): CartSchema => {
  const savedCartState = localStorage.getItem('cartState');
  const defaultState = {
    cartProducts: [],
    isOpen: false,
  };

  return savedCartState ? JSON.parse(savedCartState) : defaultState;
};

const initialState: CartSchema = loadCartFromLocalStorage();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      const { id } = action.payload;
      const existingProduct = state.cartProducts.find((item) => item.id === id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cartProducts.push({ ...action.payload, quantity: 1 });
      }
      showToast('cart.added');
    },
    deleteProduct: (state, action: PayloadAction<Product>) => {
      const { id } = action.payload;
      const existingProduct = state.cartProducts.find((item) => item.id === id);

      if (existingProduct) {
        existingProduct.quantity -= 1;

        if (existingProduct.quantity === 0) {
          state.cartProducts = state.cartProducts.filter((item) => item.id !== id);
        }
      }
      showToast('cart.deleted');
    },
    deleteAllProduct: (state, action: PayloadAction<number | undefined>) => {
      const id = action.payload;
      if (id) {
        state.cartProducts = state.cartProducts.filter((item) => item.id !== id);
      } else {
        state.cartProducts = [];
      }
    },

    openCart: (state) => {
      state.isOpen = true;
    },
    closeCart: (state) => {
      state.isOpen = false;
    },
  },
});

export const { actions: cartActions } = cartSlice;
export const { reducer: cartReducer } = cartSlice;
