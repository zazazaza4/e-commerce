import { styled } from '@mui/material/styles';
import { Box, Container } from '@mui/system';

export const PageContainer = styled(Container)(() => ({
  minHeight: '80vh',
  color: 'primary.light',
  padding: '3rem 2rem 5rem',
  textAlign: 'center',
}));

export const MainBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '4rem',
}));
