import { StateSchema } from 'app/providers/StoreProvider';

export const getCategoryIsLoading = (state: StateSchema) => state.category?.isLoading || false;
