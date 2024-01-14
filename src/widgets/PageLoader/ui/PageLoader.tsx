import { FC, memo } from 'react';
import { Box } from '@mui/material';

import { Loader } from 'shared/ui';

export const PageLoader: FC = memo(() => (
  <Box sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  }}
  >
    <Loader />
  </Box>
));
