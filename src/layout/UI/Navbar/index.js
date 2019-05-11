// Libraries
import React, { useState } from 'react';
import styled from 'styled-components';

// Assets
import logoDenma from 'static/svg/logo/logo_denma_horizontal_no_motto.svg';

// JSX
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LazyImage from 'components/UI/LazyImage';

// Components
import Drawer from 'layout/UI/Drawer';

const StyledAppBar = styled(AppBar)`
  && {
    color: ${props => props.theme.darkColor};
    background-color: ${props => props.theme.whiteColor};

    .spacing {
      flex-grow: 1;
    }

    button:first-of-type {
      margin-left: -12px;
      margin-right: 20px;
    }

    button:last-of-type {
      float: right;
    }
  }
`;

const StyledLogo = styled(LazyImage)`
  max-width: 224px;
  height: auto;
`;

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <React.Fragment>
      <StyledAppBar position="static">
        <Toolbar>
          <StyledLogo
            src={logoDenma}
            alt=""
          />
          <div className="spacing" />
          <Button color="inherit">Contact us</Button>
          <IconButton
            color="inherit"
            aria-label="Menu"
            onClick={() => setDrawerOpen(!isDrawerOpen)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </StyledAppBar>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        closeDrawer={() => setDrawerOpen(false)}
      />
    </React.Fragment>
  );
};

export default Navbar;
