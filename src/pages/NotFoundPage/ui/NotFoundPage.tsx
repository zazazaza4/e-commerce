import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  CardMedia,
  Typography,
} from '@mui/material';

import { MainBox } from 'app/styles';

import Error404Img from 'shared/assets/images/404.jpg';

interface NotFoundPageProps {}

const NotFoundPage: FC<NotFoundPageProps> = () => {
  const { t } = useTranslation('not-found');

  return (
    <MainBox
      data-testid="NotFoundPage"
      sx={{
        flexDirection: { xs: 'column', md: 'row' },
        gap: 10,
      }}
    >
      <Box sx={{ maxWidth: '30rem' }}>
        <Typography
          variant="h4"
          color="primary.dark"
          sx={{ mb: '2rem' }}
        >
          {t('title')}
        </Typography>
        <Typography variant="h6" sx={{ mb: { xs: '2rem' } }}>
          {t('description')}
        </Typography>
        <Link to="/">
          <Button
            variant="contained"
            sx={{ marginTop: '1rem' }}
          >
            {t('backHome')}
          </Button>
        </Link>
      </Box>
      <CardMedia
        sx={{
          width: '100%',
          height: { xs: 400, md: 450 },
          backgroundSize: 'contain',
        }}
        image={Error404Img}
        title={t('title')}
      />
    </MainBox>
  );
};

export default NotFoundPage;
