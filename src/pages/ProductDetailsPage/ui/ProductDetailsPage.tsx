import { useParams } from 'react-router-dom';
import {
  Box, Typography,
} from '@mui/material';

import {
  ProductDetails,
} from 'entities/Product';

const ProductDetailsPage = () => {
  const { id } = useParams<{id: string}>();

  if (!id) {
    return (
      <Box data-testid="ProductDetailsPage">
        <Typography>
          error
        </Typography>
      </Box>
    );
  }

  return (
    <Box data-testid="ProductDetailsPage">
      <ProductDetails id={id} />
    </Box>
  );
};

export default ProductDetailsPage;
