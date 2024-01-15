import React, { FC, memo, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import { LangSwitcher } from 'widgets/LangSwitcher';

import { CartIcon } from 'entities/Cart';

import { NavbarItemList } from '../model/items';
import { DrawerContent } from './DrawerContent/DrawerContent';
import { NavbarContainer } from './NavbarContainer';
import { NavbarDesktopContent } from './NavbarDesktopContent/NavbarDesktopContent';

export type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = memo((props: NavbarProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      (event.type === 'keydown' && (event as React.KeyboardEvent).key === 'Tab')
      || (event.type === 'keydown' && (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setOpenDrawer(open);
  };

  return (
    <AppBar position="sticky" sx={{ width: '100vw', fontSize: '1.2rem', padding: '.3rem' }}>
      {matches ? (
        <NavbarContainer>
          <IconButton
            data-testid="menu-button"
            sx={{
              flex: 1,
              justifyContent: 'start',
            }}
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer data-testid="my-drawer" anchor="top" open={openDrawer} onClose={toggleDrawer(false)}>
            <DrawerContent lists={NavbarItemList} onClose={toggleDrawer(false)} />
          </Drawer>
          <Box
            sx={{
              display: 'flex',
              flex: 1,
              justifyContent: 'end',
            }}
          >
            <CartIcon />
            <LangSwitcher />
          </Box>
        </NavbarContainer>
      ) : (
        <NavbarDesktopContent lists={NavbarItemList} />
      )}
    </AppBar>
  );
});
