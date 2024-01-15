import { StateSchema } from 'app/providers/StoreProvider';

export const getCartIsOpen = (state: StateSchema) => state.cart?.isOpen || false;
