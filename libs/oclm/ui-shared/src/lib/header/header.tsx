import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import {
  AppBarComponent,
  TopBar,
  MenuButton,
  LinkBrand,
  DrawerContainer,
  CustomDrawer,
  Content,
} from './header.styles';

export interface HeaderProps {
  content: {
    brand: {
      image: string | 'assets/img/logo-pied-piper-white.png';
      width: number | 120;
      text?: string;
    };
    logo: JSX.Element;
    home: string;
    inbox: string;
    field_agent: string;
    profile: string;
    contact: string;
    avatar: string;
  };
  bucketMain: JSX.Element[];
}
export const Header = (props: HeaderProps) => {
  const content = {
    brand: {
      image: 'assets/img/logo-pied-piper-white.png',
      width: 120,
      text: '',
    },

    home: 'Home',
    inbox: 'Inbox',
    field_agent: 'Field Agent',
    profile: 'Profile',
    contact: 'Contact',
    avatar:
      'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    ...props.content,
  };
  let brand: {};
  if (content['brand'].image) {
    brand = (
      <img src={content['brand'].image} alt="" width={content['brand'].width} />
    );
  }

  const buckets = {
    main: Array.isArray(props.bucketMain) ? props.bucketMain : [],
  };

  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <AppBarComponent>
      <TopBar position="fixed">
        <Toolbar>
          <MenuButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </MenuButton>
          <LinkBrand href="#" variant="h5" color="inherit" underline="none">
            {brand}
          </LinkBrand>

          <IconButton color="inherit">
            <MailIcon />
          </IconButton>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit">
            <Avatar alt="" src={content['avatar']} />
          </IconButton>
        </Toolbar>
      </TopBar>
      <CustomDrawer variant="permanent">
        <Toolbar />
        <DrawerContainer>
          <List>
            <ListItem button key={content['home']}>
              <ListItemIcon>
                <AppsIcon />
              </ListItemIcon>
              <ListItemText primary={content['home']} />
            </ListItem>
            <ListItem button key={content['inbox']}>
              <ListItemIcon>
                <BusinessCenterIcon />
              </ListItemIcon>
              <ListItemText primary={content['inbox']} />
            </ListItem>
            <ListItem button key={content['field_agent']}>
              <ListItemIcon>
                <LiveHelpIcon />
              </ListItemIcon>
              <ListItemText primary={content['field_agent']} />
            </ListItem>
            <ListItem button key={content['profile']}>
              <ListItemIcon>
                <AttachMoneyIcon />
              </ListItemIcon>
              <ListItemText primary={content['profile']} />
            </ListItem>
          </List>
        </DrawerContainer>
      </CustomDrawer>
      <CustomDrawer anchor="left" open={open} onClose={handleDrawerClose}>
        <DrawerContainer>
          <List>
            <ListItem button key={content['home']}>
              <ListItemIcon>
                <AppsIcon />
              </ListItemIcon>
              <ListItemText primary={content['home']} />
            </ListItem>
            <ListItem button key={content['inbox']}>
              <ListItemIcon>
                <BusinessCenterIcon />
              </ListItemIcon>
              <ListItemText primary={content['inbox']} />
            </ListItem>
            <ListItem button key={content['field_agent']}>
              <ListItemIcon>
                <LiveHelpIcon />
              </ListItemIcon>
              <ListItemText primary={content['field_agent']} />
            </ListItem>
            <ListItem button key={content['profile']}>
              <ListItemIcon>
                <AttachMoneyIcon />
              </ListItemIcon>
              <ListItemText primary={content['profile']} />
            </ListItem>
          </List>
        </DrawerContainer>
      </CustomDrawer>
      <Content>
        <Toolbar />
        <div>
          {buckets['main'].map((component, idx) => (
            <React.Fragment key={idx}>{component}</React.Fragment>
          ))}
        </div>
      </Content>
    </AppBarComponent>
  );
};
