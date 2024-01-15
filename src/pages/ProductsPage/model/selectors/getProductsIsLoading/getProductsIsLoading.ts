import { StateSchema } from 'app/providers/StoreProvider';

export const getProductsIsLoading = (state: StateSchema) => state.products?.isLoading || false;
