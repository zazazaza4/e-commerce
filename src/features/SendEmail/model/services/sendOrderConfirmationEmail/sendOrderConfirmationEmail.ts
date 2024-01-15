import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/StoreProvider';

import { EmailTemplateParams } from '../../types/email';

const emailjsServiceId = process.env.EMAILJS_SERVICE_ID || '';
const emailjsTemplateId = process.env.EMAILJS_TEMPLATE_ID || '';
const emailjsUserId = process.env.EMAILJS_USER_ID || '';

export const sendOrderConfirmationEmail = createAsyncThunk<string, EmailTemplateParams, ThunkConfig<string>>(
  'email/sendOrderConfirmationEmail',
  async ({
    customerName,
    orderDate,
    totalAmount,
    items,
  }, { rejectWithValue }) => {
    try {
      const templateParams = {
        customerName,
        orderDate,
        totalAmount,
        items,
      };

      const response: EmailJSResponseStatus = await emailjs.send(
        emailjsServiceId,
        emailjsTemplateId,
        templateParams,
        emailjsUserId,
      );

      return response.text;
    } catch (error) {
      return rejectWithValue('error.fetching');
    }
  },
);
