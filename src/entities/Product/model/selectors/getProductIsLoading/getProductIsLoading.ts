import { StateSchema } from 'app/providers/StoreProvider';

export const getProductIsLoading = (state: StateSchema) => state.product?.isLoading;
