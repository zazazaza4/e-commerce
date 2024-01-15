import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { cartActions } from 'entities/Cart';
import {
  getSelectedCategory,
} from 'entities/Category';
import { Product } from 'entities/Product';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import { getFilteredProducts } from '../model/selectors/getFilteredProducts/getFilteredProducts';
import { getProductsIsLoading } from '../model/selectors/getProductsIsLoading/getProductsIsLoading';
import { fetchProducts } from '../model/services/fetchProducts';
import { productsActions } from '../model/slice/productsSlice';
import { ProductsList } from './ProductsList/ProductsList';
import { Search } from './Search/Search';
import { Sidebar } from './Sidebar/Sidebar';

const ProductsPage = () => {
  const { t } = useTranslation('products');
  const products = useSelector(getFilteredProducts);
  const selectedCategory = useSelector(getSelectedCategory);
  const productIsLoading = useSelector(getProductsIsLoading);
  const theme = useTheme();
  const isMobile = useMediaQuery(() => theme.breakpoints.down('md'));
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (__PROJECT__ === 'frontend') {
      dispatch(fetchProducts());
    }
  }, [dispatch, selectedCategory]);

  const handleAddProduct = (product: Product) => {
    dispatch(cartActions.addProduct(product));
  };

  const handleSearch = (q: string) => {
    dispatch(productsActions.searchProducts(q));
  };

  return (
    <Container data-testid="ProductsPage">
      <Typography variant="h4" gutterBottom>
        {t('title')}
      </Typography>

      <Search onSearch={handleSearch} />
      <Grid
        container
        sx={{
          flexDirection: isMobile ? 'column' : 'row',
        }}
        spacing={2}
      >
        <Grid item md={3} mt={5} sx={{ flex: '1 1 auto' }}>
          <Sidebar />
        </Grid>
        <Grid
          item
          md={isMobile ? 12 : 9}
          mt={5}
          sx={{
            margin: '0 auto',
          }}
        >
          <ProductsList
            isLoading={productIsLoading}
            products={products}
            onAddToCart={handleAddProduct}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductsPage;
