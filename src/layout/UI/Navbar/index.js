// Libraries
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme, css } from 'styled-components';

// Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from 'layout/UI/Drawer';
import Logo from 'components/SVG/Logos/DenmaHorizontal_NM';

// Dependencies
import Provider from './context';

// Navbar React Context exports
export { NavbarContext } from './context';
export const NavbarProvider = Provider;

const Navbar = props => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const {
    theme
  } = props;

  console.log('props', props);

  return (
    <React.Fragment>
      <Spacing />
      <StyledAppBar
        position="fixed"
        color={theme.whiteColor}
        backgroundColor={theme.lightDarkColor}
      >
        <Toolbar>
          <a role="button">
            <StyledLogo
              alt="Denma Home"
              title="Denma Home"
              focusable="false"
            />
          </a>
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

Navbar.propTypes = {
  theme: PropTypes.instanceOf(Object).isRequired
};

const StyledAppBar = styled(({ color, backgroundColor, ...rest }) => <AppBar {...rest} />)`
  && {
    ${props => (
      css`
        color: ${props.color || props.theme.brandLightBlack};
        background-color: ${props.backgroundColor || 'transparent'};
        opacity: ${props.opacity || 1};
      `
    )}
    transition: all ease 200ms;
    box-shadow: none;

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

    button:hover {
      text-decoration: none;
      background-color: rgba(255, 255, 255, 0.08);
    }
  }
`;

const StyledLogo = styled(Logo)`
  width: 100%;
  height: auto;
  max-width: 225px;
  cursor: pointer;
  
  @media (min-width: 600px) {
    max-width: 225px !important;
  }

  @media (min-width: 0px) and (orientation: landscape) {
    max-width: 150px;
  }
  max-width: 125px;
`;

const Spacing = styled.div`
  @media (min-width: 600px) {
    min-height: 64px !important;
  }

  @media (min-width: 0px) and (orientation: landscape) {
    min-height: 48px;
  }
  min-height: 56px;
`;

export default withTheme(Navbar);
