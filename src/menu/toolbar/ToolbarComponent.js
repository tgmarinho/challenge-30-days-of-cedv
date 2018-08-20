import React from 'react';
import { TunnelPlaceholder } from 'react-tunnels';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

export const ToolbarComponent = () => (
  <AppBar>
    <Toolbar>
      <IconButton
        color="secondary"
        aria-label="Menu"
        // onClick={toggleMenu(false)}
      >
        <MenuIcon />
      </IconButton>
      <Typography type="headline" color="inherit">
        {/* <TunnelPlaceholder id="app-title" /> */}
      </Typography>
    </Toolbar>
  </AppBar>
);
