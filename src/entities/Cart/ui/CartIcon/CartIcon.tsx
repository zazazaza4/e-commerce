import { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, Typography } from '@mui/material';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import { getCartItemCount } from '../../model/selectors/getCartItemCount/getCartItemCount';
import { cartActions } from '../../model/slice/cartSlice';

export const CartIcon: FC = memo(() => {
  const cartItemCount = useSelector(getCartItemCount);
  const dispatch = useAppDispatch();

  const handleOnOpen = () => {
    dispatch(cartActions.openCart());
  };

  return (
    <Button
      data-testid="CartIcon"
      onClick={handleOnOpen}
      sx={{ color: 'white' }}
    >
      <ShoppingCartIcon />
      <Typography sx={{ marginTop: '-1rem' }}>{`(${cartItemCount})`}</Typography>
    </Button>
  );
});
