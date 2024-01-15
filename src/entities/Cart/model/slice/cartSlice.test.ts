import { CartSchema } from '../types/cart';
import { cartActions, cartReducer } from './cartSlice';

describe('cartSlice', () => {
  test('addProduct action', () => {
    const state: DeepPartial<CartSchema> = {
      cartProducts: [],
      isOpen: true,
    };

    const product = {
      id: 1,
      title: 'Test Product',
      price: 10.99,
    };

    const newState = cartReducer(state as CartSchema, cartActions.addProduct(product));

    expect(newState.cartProducts).toHaveLength(1);
    expect(newState.cartProducts[0].id).toBe(1);
    expect(newState.cartProducts[0].quantity).toBe(1);
    expect(newState.isOpen).toBeTruthy();
  });

  test('deleteProduct action', () => {
    const state: DeepPartial<CartSchema> = {
      cartProducts: [
        {
          id: 1, title: 'Product 1', price: 15.99, quantity: 1,
        },
        {
          id: 2, title: 'Product 2', price: 12.99, quantity: 1,
        },
      ],
      isOpen: true,
    };

    const productToDelete = { id: 1, title: 'Product 1', price: 15.99 };

    const newState = cartReducer(state as CartSchema, cartActions.deleteProduct(productToDelete));

    expect(newState.cartProducts[0].quantity).toBe(1);
    expect(newState.cartProducts).toHaveLength(1);
    expect(newState.isOpen).toBeTruthy();
  });

  test('deleteAllProduct action', () => {
    const state: DeepPartial<CartSchema> = {
      cartProducts: [
        {
          id: 1, title: 'Product 1', price: 15.99, quantity: 2,
        },
        {
          id: 2, title: 'Product 2', price: 12.99, quantity: 1,
        },
      ],
      isOpen: true,
    };

    const productIdToDelete = 1;

    const newState = cartReducer(state as CartSchema, cartActions.deleteAllProduct(productIdToDelete));

    expect(newState.cartProducts).toHaveLength(1);
    expect(newState.cartProducts[0].id).toBe(2);
    expect(newState.isOpen).toBeTruthy();
  });

  test('openCart and closeCart actions', () => {
    const state: DeepPartial<CartSchema> = {
      isOpen: false,
    };

    const openCartState = cartReducer(state as CartSchema, cartActions.openCart());
    expect(openCartState.isOpen).toBeTruthy();

    const closeCartState = cartReducer(openCartState, cartActions.closeCart());
    expect(closeCartState.isOpen).toBeFalsy();
  });
});
