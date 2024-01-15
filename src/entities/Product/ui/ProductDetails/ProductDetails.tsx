import { FC, memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useStore } from 'react-redux';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';

import { cartActions } from 'entities/Cart';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Loader } from 'shared/ui';

import { getProductDetails } from '../../model/selectors/getProductDetails/getProductDetails';
import { getProductIsLoading } from '../../model/selectors/getProductIsLoading/getProductIsLoading';
import { fetchProductById } from '../../model/services/fetchProductById/fetchProductById';
import { productReducer } from '../../model/slice/productSlice';
import { Product } from '../../model/types/product';

const productReducerKey: StateSchemaKey = 'product';

interface ProductDetailsProps {
  id: string
}

export const ProductDetails: FC<ProductDetailsProps> = memo(({
  id,
}: ProductDetailsProps) => {
  const { t } = useTranslation('products');
  const dispatch = useAppDispatch();
  const product = useSelector(getProductDetails);
  const isLoading = useSelector(getProductIsLoading);
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    store.reducerManager.add(productReducerKey, productReducer);
    dispatch({ type: `@INIT ${productReducerKey} reducer` });

    return () => {
      store.reducerManager.remove(productReducerKey);
      dispatch({ type: `@DESTROY ${productReducerKey} reducer` });
    };
    // eslint-disable-next-line
    }, []);

  useEffect(() => {
    if (__PROJECT__ === 'frontend') {
      dispatch(fetchProductById(id));
    }
  }, [dispatch, id]);

  const handleAddProduct = (product: Product) => {
    dispatch(cartActions.addProduct(product));
  };

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Loader />
      </Box>
    );
  }

  if (!product) {
    return (
      <Box mt={4} display="flex" justifyContent="center" alignItems="center">
        <Typography variant="h3" color="textPrimary">
          Product not found.
        </Typography>
      </Box>
    );
  }

  return (
    <Box mt={4} display="flex">
      <Card style={{ display: 'flex', flexGrow: 1 }}>
        <CardMedia
          component="img"
          alt={product.title}
          image={product.image}
          style={{ width: '50%', objectFit: 'cover' }}
        />
        <CardContent style={{
          width: '50%',
          height: '50%',
          objectFit: 'contain',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'inherit',
          justifyContent: 'start',
          gap: '20px',
        }}
        >
          <Typography variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            {product.category}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {product.description}
          </Typography>
          <Typography variant="h6" color="textPrimary">
            {t('price')}
            :
            {product.price}
          </Typography>
          <Button
            variant="contained"
            onClick={() => handleAddProduct(product)}
            color="primary"
          >
            {t('addToCart')}
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
});
