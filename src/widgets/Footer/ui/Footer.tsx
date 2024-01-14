import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Grid,
  Typography,
} from '@mui/material';

import { FooterAboutList, FooterHelpList, FooterInfoList } from '../model/items';
import { FooterList } from './FooterList/FooterList';

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
  const { t } = useTranslation();

  return (
    <Box
      bgcolor="primary.main"
      sx={{
        color: 'white',
        width: '100vw',
      }}
    >
      <Box sx={{ padding: '2.5rem 2rem 2rem' }}>
        <Grid container spacing={2} justifyContent="space-around">
          <Grid item>
            <Typography sx={{ fontWeight: '600', mb: '.5rem' }}>
              {t('footer.help.title')}
            </Typography>
            <FooterList items={FooterHelpList} />
          </Grid>
          <Grid item>
            <Typography sx={{ fontWeight: '600', mb: '.5rem' }}>
              {t('footer.about.title')}
            </Typography>
            <FooterList items={FooterAboutList} />
          </Grid>
          <Grid item>
            <Typography sx={{ fontWeight: '600', mb: '.5rem' }}>
              {t('footer.info.title')}
            </Typography>
            <FooterList items={FooterInfoList} />
          </Grid>
        </Grid>
      </Box>
      <Box
        bgcolor="primary.dark"
        sx={{
          padding: '.8rem',
          textAlign: 'center',
        }}
      >
        ©
        {' '}
        {new Date().getFullYear()}
        {' '}
        {t('footer.rightsReserved')}
        {' '}
        {t('footer.termsAndPrivacy')}

      </Box>
    </Box>
  );
};
