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
      <Box>
        <Typography>
          error
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      <ProductDetails id={id} />
    </Box>
  );
};

export default ProductDetailsPage;
