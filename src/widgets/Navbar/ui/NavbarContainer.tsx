import { styled } from '@mui/material/styles';
import { Container } from '@mui/system';

export const NavbarContainer = styled(Container)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '3.5rem',
  color: 'white',
}));
