import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  Button, Card, CardContent, CardMedia, Typography,
} from '@mui/material';

import { Product } from 'entities/Product';

import { RoutesPath } from 'shared/config/routeConfig/routeConfig';
import { truncateText } from 'shared/lib/truncateText/truncateText';

interface ProductsCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductsCard: FC<ProductsCardProps> = memo(({ product, onAddToCart }: ProductsCardProps) => {
  const { t } = useTranslation('products');

  const handleAddProduct = () => {
    onAddToCart(product);
  };

  return (
    <Card
      data-testid="ProductItem"
      sx={{
        height: 400,
        textAlign: 'center',
      }}
    >
      <Link to={`${RoutesPath.product_details}${product.id}`}>
        <CardMedia
          component="img"
          alt={product.title}
          height="60%"
          width="80%"
          sx={{
            objectFit: 'contain',
          }}
          image={product.image}
        />

        <CardContent sx={{
          height: '20%',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          backgroundColor: '#ffffff',
          color: 'black',
          padding: '0px',
        }}
        >
          <Typography title={product.title} variant="h6" component="div">
            {truncateText(product.title, 19)}
          </Typography>
          {product.category && (
            <Typography title={product.category} color="textSecondary" gutterBottom>
              {truncateText(product.category, 20)}
            </Typography>
          )}
          <Typography variant="body2" color="textSecondary">
            {t('price')}
            :
            {t('currency')}
            {product.price}
          </Typography>
        </CardContent>
      </Link>
      <Button
        data-testid="addToCartButton"
        variant="contained"
        color="primary"
        onClick={handleAddProduct}
      >
        {t('addToCart')}
      </Button>
    </Card>
  );
});
