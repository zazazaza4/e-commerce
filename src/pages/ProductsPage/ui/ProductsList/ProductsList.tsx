import {
  FC, memo, useEffect, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import ReactPaginate from 'react-paginate';
import {
  Box, Button, Grid, Typography,
} from '@mui/material';

import { Product } from 'entities/Product';

import { Loader } from 'shared/ui';

import { ProductsCard } from '../ProductsCard/ProductsCard';

interface ProductsListProps {
  products?: Product[];
  isLoading?: boolean;
  itemsPerPage?: number;
  onAddToCart: (product: Product) => void;
}

export const ProductsList: FC<ProductsListProps> = memo(({
  products = [],
  isLoading,
  itemsPerPage = 6,
  onAddToCart,
}: ProductsListProps) => {
  const { t } = useTranslation('products');
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [currentPage]);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = products.slice(startIndex, endIndex);

  if (isLoading) {
    return (
      <Box
        height="300px"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Loader />
      </Box>
    );
  }

  if (products && products.length <= 0) {
    return (
      <Box sx={{
        minHeight: '30vh',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
      >
        <Typography data-testid="NoSearchResultsMessage" variant="h3">
          {t('noProductsAvailable')}
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Grid padding="10px" container spacing={2}>
        {paginatedProducts.map((product) => (
          <Grid item key={product.id} xs={12} lg={4}>
            <ProductsCard product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>

      {products && products.length > itemsPerPage && (
        <Box
          textAlign="center"
          marginTop={2}
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <ReactPaginate
            pageCount={Math.ceil(products.length / itemsPerPage)}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            onPageChange={handlePageChange}
            containerClassName="pagination"
            activeClassName="active"
            pageClassName="pagination-link"
            pageLinkClassName="pagination-link-a"
            previousLabel={(
              <Button
                variant="contained"
                sx={{
                  minWidth: '30px',
                }}
              >
                {'<'}
              </Button>
            )}
            nextLabel={(
              <Button
                variant="contained"
                sx={{
                  minWidth: '30px',
                }}
              >
                {'>'}
              </Button>
            )}
          />
        </Box>
      )}
    </Box>
  );
});
