import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
} from '@mui/material';

import { NavbarItemType } from '../../model/items';

interface DrawerProps {
  onClose: (event: React.KeyboardEvent | React.MouseEvent) => void;
  lists: NavbarItemType[];
}

export const DrawerContent: FC<DrawerProps> = memo(({
  onClose,
  lists,
}: DrawerProps) => (
  <Box
    bgcolor="primary.main"
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '.5rem',
      fontSize: '1.2rem',
    }}
    role="presentation"
    onClick={onClose}
    onKeyDown={onClose}
  >
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        mb: '.5rem',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {lists.map(({ path, text }) => (
        <Link key={path} to={path}>
          text
        </Link>
      ))}
    </Box>
  </Box>
));
