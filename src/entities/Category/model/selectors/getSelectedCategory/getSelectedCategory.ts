import { StateSchema } from 'app/providers/StoreProvider';

export const getSelectedCategory = (state: StateSchema) => state.category?.selectedCategory;
