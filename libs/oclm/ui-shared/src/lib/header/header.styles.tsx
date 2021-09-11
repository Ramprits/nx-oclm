import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import AppBar from '@mui/material/AppBar';
import Link from '@mui/material/Link';
import Drawer from '@mui/material/Drawer';

export const AppBarComponent = styled('div')(({ theme }) => ({
  display: 'flex',
}));

export const TopBar = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

export const MenuButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  marginRight: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    display: 'inline-flex',
  },
}));

export const LinkBrand = styled(Link)(({ theme }) => ({
  flexGrow: 1,
  [theme.breakpoints.down('xs')]: {
    display: 'none',
  },
}));

export const CustomDrawer = styled(Drawer)(({ theme }) => ({
  width: 256,
  flexShrink: 0,
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const DrawerContainer = styled('div')(({ theme }) => ({
  width: 256,
  overflow: 'auto',
}));

export const Content = styled('main')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(2),
  margin: theme.spacing(2),
}));
