import { sendOrderConfirmationEmail } from '../services/sendOrderConfirmationEmail/sendOrderConfirmationEmail';
import { EmailSchema } from '../types/email';
import { emailReducer } from './emailSlice';

describe('emailReducer', () => {
  test('handles sendOrderConfirmationEmail.pending action', () => {
    const state: DeepPartial<EmailSchema> = {
      isLoading: false,
      isEmailSent: false,
      error: undefined,
    };

    const newState = emailReducer(state as EmailSchema, sendOrderConfirmationEmail.pending);

    expect(newState).toEqual({
      isLoading: true,
      isEmailSent: false,
      error: undefined,
    });
  });

  test('handles sendOrderConfirmationEmail.fulfilled action', () => {
    const state: DeepPartial<EmailSchema> = {
      isLoading: true,
      isEmailSent: false,
      error: undefined,
    };

    const newState = emailReducer(state as EmailSchema, sendOrderConfirmationEmail.fulfilled);

    expect(newState).toEqual({
      isLoading: false,
      isEmailSent: true,
      error: undefined,
    });
  });

  test('handles sendOrderConfirmationEmail.rejected action', () => {
    const state: DeepPartial<EmailSchema> = {
      isLoading: true,
      isEmailSent: false,
      error: undefined,
    };

    const errorMessage = 'Error sending confirmation email';

    const newState = emailReducer(
      state as EmailSchema,
      sendOrderConfirmationEmail.rejected(new Error(errorMessage), '', {
        customerName: '', items: '', orderDate: '', totalAmount: '',
      }),
    );

    expect(newState).toEqual({
      isLoading: false,
      isEmailSent: false,
      error: 'Error sending confirmation email',
    });
  });
});
