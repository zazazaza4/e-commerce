import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box, IconButton, ListItem, ListItemText,
} from '@mui/material';

import { truncateText } from 'shared/lib/truncateText/truncateText';

import { CartProduct } from '../../model/types/cart';

interface CartItemProps {
  item: CartProduct;
  handleAddProduct: (product: CartProduct) => void;
  handleDeleteProduct: (product: CartProduct) => void;
  handleDeleteAllProduct: (product: CartProduct) => void;
}

export const CartItem: FC<CartItemProps> = memo(({
  item,
  handleAddProduct,
  handleDeleteProduct,
  handleDeleteAllProduct,
}: CartItemProps) => {
  const { t } = useTranslation();

  return (
    <ListItem data-testid="SelectedProductItem" sx={{ borderBottom: '1px solid #ccc' }}>
      <Box sx={{ flex: 1 }}>
        <ListItemText
          primary={truncateText(item.title, 20)}
          secondary={`${item.price} * ${item.quantity} = ${item.quantity * (item.price || 1)}${t('currency')}`}
        />
      </Box>
      <Box>
        <IconButton onClick={() => handleAddProduct(item)} color="primary">
          +
        </IconButton>
        <IconButton
          data-testid="removeFromCartButton"
          onClick={() => handleDeleteProduct(item)}
          color="error"
        >
          -
        </IconButton>
        <IconButton
          onClick={() => handleDeleteAllProduct(item)}
          color="error"
        >
          Clear
        </IconButton>
      </Box>
    </ListItem>
  );
});
