import emailjs from '@emailjs/browser';

import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { sendOrderConfirmationEmail } from './sendOrderConfirmationEmail';

jest.mock('@emailjs/browser', () => ({
  send: jest.fn(),
}));

describe('sendOrderConfirmationEmail async thunk', () => {
  test('successful email sending', async () => {
    const templateParams = {
      customerName: 'John Doe',
      orderDate: '2022-01-01',
      totalAmount: '100',
      items: 'Item 1, Item 2',
    };

    const response = {
      text: 'Email sent successfully',
    };

    (emailjs.send as jest.Mock).mockResolvedValueOnce(response);

    const thunk = new TestAsyncThunk(sendOrderConfirmationEmail);
    const result = await thunk.callThunk(templateParams);

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(response.text);
  });

  test('failed email sending', async () => {
    const templateParams = {
      customerName: 'John Doe',
      orderDate: '2022-01-01',
      totalAmount: '100',
      items: 'Item 1, Item 2',
    };

    const response = {
      text: 'Email sent successfully',
    };

    const thunk = new TestAsyncThunk(sendOrderConfirmationEmail);
    const d = await thunk.callThunk(templateParams);

    console.log(d);
  });
});
