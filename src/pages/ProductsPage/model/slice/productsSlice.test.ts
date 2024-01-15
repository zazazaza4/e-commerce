import { fetchProducts } from '../services/fetchProducts';
import { ProductsSchema } from '../types/products';
import { productsActions, productsReducer } from './productsSlice';

describe('productsSlice', () => {
  const state: DeepPartial<ProductsSchema> = {
    products: [],
    isLoading: false,
    error: '',
    filteredProducts: [],
  };

  test('should handle searchProducts', () => {
    const stateResult = productsReducer(state as ProductsSchema, productsActions.searchProducts('test'));

    const sampleProducts = [
      { id: 1, title: 'test', price: 10.99 },
      { id: 2, title: 'Product 2', price: 19.99 },
    ];

    const expectedFilteredProducts = [
      { id: 1, title: 'test', price: 10.99 },
    ];

    const stateWithProducts = productsReducer(
        stateResult as ProductsSchema,
        fetchProducts.fulfilled(sampleProducts, ''),
    );

    const stateWithSearch = productsReducer(stateWithProducts, productsActions.searchProducts('test'));

    expect(stateWithSearch.filteredProducts).toEqual(expectedFilteredProducts);
  });

  test('should handle fetchProducts.pending', () => {
    const stateResult = productsReducer(state as ProductsSchema, fetchProducts.pending(''));

    expect(stateResult.isLoading).toBe(true);
  });

  test('should handle fetchProducts.fulfilled', () => {
    const sampleProducts = [
      { id: 1, title: 'Product 1', price: 10.99 },
      { id: 2, title: 'Product 2', price: 19.99 },
    ];

    const stateResult = productsReducer(
        state as ProductsSchema,
        fetchProducts.fulfilled(sampleProducts, ''),
    );

    expect(stateResult.isLoading).toBe(false);
    expect(stateResult.products).toEqual(sampleProducts);
    expect(stateResult.filteredProducts).toEqual(sampleProducts);
    expect(stateResult.error).toBe('');
  });

  test('should handle fetchProducts.rejected', () => {
    const error = 'Error fetching products';

    const stateResult = productsReducer(state as ProductsSchema, fetchProducts.rejected(new Error(error), ''));

    expect(stateResult.isLoading).toBe(false);
    expect(stateResult.products).toEqual([]);
    expect(stateResult.filteredProducts).toEqual([]);
    expect(stateResult.error).toBe(error);
  });
});
