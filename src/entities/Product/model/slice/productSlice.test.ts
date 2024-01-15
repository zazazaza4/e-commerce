import { fetchProductById } from '../services/fetchProductById/fetchProductById';
import { ProductSchema } from '../types/product';
import { productReducer } from './productSlice';

describe('productSlice', () => {
  test('should handle fetchProductById.pending', () => {
    const state: ProductSchema = {
      isLoading: false,
      error: '',
    };

    expect(
      productReducer(state, fetchProductById.pending),
    ).toEqual({ isLoading: true, error: '' });
  });

  test('should handle fetchProductById.fulfilled', () => {
    const state: ProductSchema = {
      isLoading: true,
      error: '',
    };
    const mockProduct = {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      description: 'Your perfect pack for everyday',
      category: "men's clothing",
    };

    expect(
      productReducer(state, fetchProductById.fulfilled(mockProduct, '', '')),
    ).toEqual({ isLoading: false, error: '', product: mockProduct });
  });

  test('should handle fetchProductById.rejected', () => {
    const state: ProductSchema = {
      isLoading: true,
      error: '',
    };
    const mockError = new Error('Some error message');

    expect(
      productReducer(state, fetchProductById.rejected(mockError, '', '')),
    ).toEqual({ isLoading: false, error: 'Some error message' });
  });
});
