import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { sendOrderConfirmationEmail } from '../services/sendOrderConfirmationEmail/sendOrderConfirmationEmail';
import { EmailSchema } from '../types/email';

const initialState: EmailSchema = {
  isLoading: false,
  isEmailSent: false,
};

const emailSlice = createSlice({
  name: 'email',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendOrderConfirmationEmail.pending, (state) => {
        state.isLoading = true;
        state.isEmailSent = false;
      })
      .addCase(sendOrderConfirmationEmail.fulfilled, (state) => {
        state.isLoading = false;
        state.isEmailSent = true;
      })
      .addCase(sendOrderConfirmationEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { actions: emailActions } = emailSlice;
export const { reducer: emailReducer } = emailSlice;
