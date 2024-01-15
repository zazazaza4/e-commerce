import React from 'react';
import {
  Avatar, ListItem, ListItemAvatar, ListItemText,
} from '@mui/material';

import { CartProduct } from 'entities/Cart';

interface SelectedProductItemProps {
  product: CartProduct;
}

export const SelectedProductItem: React.FC<SelectedProductItemProps> = ({ product }) => (
  <ListItem>
    <ListItemAvatar>
      <Avatar alt={product.title} src={product.image} />
    </ListItemAvatar>
    <ListItemText
      primary={product.title}
      secondary={`Quantity: ${product.quantity} | Price: ${product.price}`}
    />
  </ListItem>
);
