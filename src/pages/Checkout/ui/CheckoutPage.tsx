import { FC, memo, useCallback } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';

import {
  EmailFormOrder, getEmailError, getEmailIsEmailSent, getEmailIsLoading, sendOrderConfirmationEmail,
} from 'features/SendEmail';

import {
  cartActions, CartProduct, getCartProducts, getCartTotalPrice,
} from 'entities/Cart';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Loader } from 'shared/ui';

import { SelectedProductItem } from './SelectedProductItem/SelectedProductItem';

type FormData = {
  name: string;
  email: string;
  phone: string;
};

const CheckoutPage: FC = memo(() => {
  const { t } = useTranslation('checkout');
  const cartProducts = useSelector(getCartProducts);
  const totalPrice = useSelector(getCartTotalPrice);
  const isLoading = useSelector(getEmailIsLoading);
  const error = useSelector(getEmailError);
  const isSuccess = useSelector(getEmailIsEmailSent);

  const dispatch = useAppDispatch();

  const transformCartToItems = useCallback((cartProducts) => {
    const itemsStringArray = cartProducts.map(({ price, quantity, title }: CartProduct) => (
      `${title} (Кількість: ${quantity}, Ціна: ${price})`
    ));

    return itemsStringArray.join('\n');
  }, []);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const emailTemplateParams = {
      customerName: data.name,
      orderDate: new Date().toLocaleDateString(),
      totalAmount: totalPrice.toFixed(2) + t('currency'),
      items: transformCartToItems(cartProducts),
    };

    console.log(emailTemplateParams);
    dispatch(sendOrderConfirmationEmail(emailTemplateParams));
    dispatch(cartActions.deleteAllProduct());
  };

  let content;

  if (isLoading) {
    content = <Loader />;
  } else if (error) {
    content = (
      <Typography data-testid="OrderMessageError" variant="h4" color="error">
        {t('errorOccurred')}
      </Typography>
    );
  } else if (isSuccess) {
    content = (
      <Typography data-testid="OrderMessageSuccess" variant="h4" color="primary.main">
        {t('emailSentSuccessfully')}
      </Typography>
    );
  } else if (cartProducts.length <= 0) {
    content = true;
  }

  return (
    <Container
      data-testid="CheckoutPage"
      component="main"
      maxWidth="md"
    >
      <Box mb="20px">
        <Grid item xs={12}>
          <Typography variant="h6">{t('selectedProducts')}</Typography>
          <ul>
            {cartProducts.map((product) => (
              <SelectedProductItem key={product.id} product={product} />
            ))}
          </ul>
        </Grid>
        <Typography variant="h6">
          {t('totalPrice')}
          {t('currency')}
          {totalPrice.toFixed(2)}
        </Typography>
      </Box>
      <EmailFormOrder isDisabled={Boolean(content)} onSubmit={onSubmit} />
      {content}
    </Container>
  );
});

export default CheckoutPage;
