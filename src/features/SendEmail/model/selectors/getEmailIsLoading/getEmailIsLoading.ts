import { StateSchema } from 'app/providers/StoreProvider';

export const getEmailIsLoading = (state: StateSchema) => state.email?.isLoading || false;
