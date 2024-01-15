import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
} from '@mui/material';

import { LangSwitcher } from 'widgets/LangSwitcher';

import { CartIcon } from 'entities/Cart';

import { Logo } from 'shared/ui/Logo/Logo';

import { NavbarItemType } from '../../model/items';
import { NavbarContainer } from '../NavbarContainer';

interface NavbarDesktopContentProps {
  lists: NavbarItemType[];
}

export const NavbarDesktopContent: FC<NavbarDesktopContentProps> = memo(({ lists }: NavbarDesktopContentProps) => (
  <NavbarContainer>
    <Logo />
    <Box
      sx={{
        display: 'flex',
        mb: '.5rem',
        justifyContent: 'center',
        alignItems: 'space-between',
      }}
    >
      {lists.map(({ path, text }) => (
        <Button key={path}>
          <Link to={path}>
            {text}
          </Link>
        </Button>
      ))}
    </Box>
    <Box sx={{
      display: 'flex',
    }}
    >
      <CartIcon />
      <LangSwitcher />
    </Box>
  </NavbarContainer>
));
