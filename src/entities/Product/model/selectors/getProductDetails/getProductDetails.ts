import { StateSchema } from 'app/providers/StoreProvider';

export const getProductDetails = (state: StateSchema) => state.product?.product;
