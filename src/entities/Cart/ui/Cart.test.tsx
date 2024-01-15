import * as redux from 'react-redux';
import { fireEvent, screen } from '@testing-library/react';

import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

import { cartActions, cartReducer } from '../model/slice/cartSlice';
import { CartSchema } from '../model/types/cart';
import { Cart } from './Cart';

describe('Cart component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders Cart component with open drawer', () => {
    componentRender(<Cart />, {
      initialState: {
        cart: {
          isOpen: true,
          cartProducts: [
            { id: 1 },
          ],
        },
      },
    });

    const closeButton = screen.getByLabelText(/close/i);
    const cartTitle = screen.getByText(/cart.title/i);
    const proceedToCheckoutButton = screen.getByLabelText(/proceed to checkout/i);

    expect(closeButton).toBeInTheDocument();
    expect(cartTitle).toBeInTheDocument();
    expect(proceedToCheckoutButton).toBeInTheDocument();
  });

  test('closes the cart when close button is clicked', () => {
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

    const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
    const mockDispatchFn = jest.fn();
    useDispatchSpy.mockReturnValue(mockDispatchFn);

    componentRender(<Cart />, {
      initialState: {
        cart: state,
      },
    });

    const closeButton = screen.getByLabelText(/close/i);

    fireEvent.click(closeButton);
    expect(mockDispatchFn).toHaveBeenCalledWith(cartActions.closeCart());
  });
});
