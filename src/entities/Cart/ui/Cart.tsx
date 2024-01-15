import { FC, memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Drawer, IconButton, List, Typography,
} from '@mui/material';
import Button from '@mui/material/Button';

import { RoutesPath } from 'shared/config/routeConfig/routeConfig';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import { getCartIsOpen } from '../model/selectors/getCartIsOpen/getCartIsOpen';
import { getCartProducts } from '../model/selectors/getCartProducts/getCartProducts';
import { cartActions } from '../model/slice/cartSlice';
import { CartProduct } from '../model/types/cart';
import { CartItem } from './CartItem/CartItem';

export const Cart: FC = memo(() => {
  const { t } = useTranslation();
  const cartProducts = useSelector(getCartProducts);
  const isOpen = useSelector(getCartIsOpen);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }

    return () => {
      document.documentElement.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleAddProduct = (product: CartProduct) => {
    dispatch(cartActions.addProduct(product));
  };

  const handleDeleteProduct = (product: CartProduct) => {
    dispatch(cartActions.deleteProduct(product));
  };

  const handleDeleteAllProduct = (product: CartProduct) => {
    dispatch(cartActions.deleteAllProduct(product.id));
  };

  const handleOnClose = () => {
    dispatch(cartActions.closeCart());
  };

  const handleProceedToCheckout = () => {
    navigate(RoutesPath.checkout);
    handleOnClose();
  };

  return (
    <Drawer
      open={isOpen}
      anchor="right"
      onClose={handleOnClose}
      PaperProps={{
        sx: {
          width: { xs: '100%', sm: 500 },
          backgroundColor: '#fff',
          padding: '16px',
        },
      }}
    >
      <IconButton
        onClick={handleOnClose}
        sx={{
          alignSelf: 'flex-end',
          marginRight: '5px',
          marginTop: '5px',
          color: '#333',
        }}
      >
        <CloseIcon />
      </IconButton>

      <Typography variant="h4" textAlign="center" mt={2}>
        {t('cart.title')}
      </Typography>

      {cartProducts.length === 0 ? (
        <Box
          height="100%"
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Typography variant="body1" textAlign="center" mt={2}>
            {t('cart.empty')}
          </Typography>
        </Box>
      ) : (
        <>
          <List>
            {cartProducts.map((item) => (
              <CartItem
                key={item.id}
                handleDeleteProduct={handleDeleteProduct}
                handleDeleteAllProduct={handleDeleteAllProduct}
                handleAddProduct={handleAddProduct}
                item={item}
              />
            ))}

          </List>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', margin: '16px 4px 30px 4px' }}>
            <Button variant="contained" color="primary" onClick={handleProceedToCheckout}>
              {t('cart.proceedToCheckout')}
            </Button>
          </Box>
        </>
      )}
    </Drawer>
  );
});
