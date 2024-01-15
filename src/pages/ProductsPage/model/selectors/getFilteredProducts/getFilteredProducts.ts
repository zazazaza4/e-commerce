import { StateSchema } from 'app/providers/StoreProvider';

export const getFilteredProducts = (state: StateSchema) => state.products?.filteredProducts || [];
