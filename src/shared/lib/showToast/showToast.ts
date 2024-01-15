import i18n from 'i18next';
import { toast, ToastOptions } from 'react-toastify';

 type ToastType = 'success' | 'warn' | 'error';

const getDefaultToastOptions = (): ToastOptions => ({
  position: 'top-center',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
});

export const showToast = (key: string, customOptions?: ToastOptions, type: ToastType = 'success'): void => {
  const defaultOptions = getDefaultToastOptions();
  const message = i18n.t(key);

  const options: ToastOptions = { ...defaultOptions, ...customOptions };
  toast[type](message, options);
};
