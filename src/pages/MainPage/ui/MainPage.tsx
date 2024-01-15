import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ImageList, ImageListItem, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { RoutesPath } from 'shared/config/routeConfig/routeConfig';

import { banners } from '../model/banners';

const MainPage: FC = memo(() => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const navigateToProducts = useCallback(() => {
    navigate(RoutesPath.products);
  }, [navigate]);

  return (
    <>
      <Typography
        variant="h4"
        color="black"
        fontWeight={600}
        sx={{
          textAlign: 'center',
          mb: '3rem',
        }}
      >
        {t('title')}
      </Typography>
      <ImageList variant="masonry" cols={matches ? 2 : 3} gap={8}>
        {banners.map((item) => (
          <ImageListItem
            sx={{
              transitionDuration: '0.2s',
              cursor: 'pointer',
              ':hover': {
                opacity: 0.4,
              },
            }}
            onClick={navigateToProducts}
            key={item}
          >
            <img
              src={item}
              alt={item}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
});

export default MainPage;
