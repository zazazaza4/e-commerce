import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Button, Typography } from '@mui/material';

export const PageError: FC = memo(() => {
  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Typography variant="body1" align="center" mb={2}>
        {t('error.message')}
      </Typography>
      <Button
        variant="contained"
        onClick={reloadPage}
      >
        {t('error.button')}
      </Button>
    </Box>
  );
});
