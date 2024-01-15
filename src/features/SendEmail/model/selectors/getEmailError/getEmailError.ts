import { StateSchema } from 'app/providers/StoreProvider';

export const getEmailError = (state: StateSchema) => state.email?.error;
