import { StateSchema } from 'app/providers/StoreProvider';

export const getEmailIsEmailSent = (state: StateSchema) => state.email?.isEmailSent;
