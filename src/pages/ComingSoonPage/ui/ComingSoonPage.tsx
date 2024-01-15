import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  Box, Button, CardMedia, Typography,
} from '@mui/material';

import { MainBox } from 'app/styles';

import WorkingImg from 'shared/assets/images/working.png';

interface ComingSoonPageProps {}

const ComingSoonPage: FC<ComingSoonPageProps> = () => {
  const { t } = useTranslation('coming-soon');

  return (
    <MainBox
      data-testid="ComingSoonPage"
      sx={{
        flexDirection: {
          xs:
    'column',
          md: 'row',
        },
      }}
    >
      <Box sx={{ maxWidth: '30rem' }}>
        <Typography
          variant="h4"
          color="primary.dark"
          sx={{ mb: '2rem' }}
        >
          {t('workInProgress')}
        </Typography>
        <Typography variant="h6" sx={{ mb: { xs: '2rem' } }}>
          {t('excitingNewWebsite')}
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
        image={WorkingImg}
        title={t('workingOnTheSite')}
      />
    </MainBox>
  );
};

export default ComingSoonPage;
