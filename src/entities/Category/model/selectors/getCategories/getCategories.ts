import { StateSchema } from 'app/providers/StoreProvider';

export const getCategories = (state: StateSchema) => state.category?.categories;
