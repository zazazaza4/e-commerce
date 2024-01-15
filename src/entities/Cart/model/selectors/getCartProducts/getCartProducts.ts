import { StateSchema } from 'app/providers/StoreProvider';

export const getCartProducts = (state: StateSchema) => state.cart?.cartProducts || [];
