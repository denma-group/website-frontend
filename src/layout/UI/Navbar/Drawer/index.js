// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import Link from 'next/link';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { DrawerList, Divider } from '../components';
import { renderDrawerLinks } from '../links';

const NavbarDrawer = props => {
  const {
    logo,
    logoHref = '/', // Defaults to root address.
    open,
    closeDrawer,
    links,
    ...rest
  } = props;

  const fullList = (
    <DrawerList>
      {logo && (
        <React.Fragment>
          <LogoWrapper>
            <Link href={logoHref}>
              <a role="button">
                {logo}
              </a>
            </Link>
            <IconButton
              color="inherit"
              aria-label="Menu"
              onClick={closeDrawer}
            >
              <MenuIcon />
            </IconButton>
          </LogoWrapper>
          <Divider />
        </React.Fragment>
      )}
      {renderDrawerLinks(
        links,
        {
          closeDrawer
        },
      )}
    </DrawerList>
  );

  return (
    <StyledDrawer
      anchor="top"
      open={open}
      onClose={closeDrawer}
      {...rest}
    >
      <div
        tabIndex={0}
        role="button"
        onKeyDown={closeDrawer}
        className="drawer-container"
      >
        {fullList}
      </div>
    </StyledDrawer>
  );
};

NavbarDrawer.propTypes = {
  logo: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  closeDrawer: PropTypes.func.isRequired,
  links: PropTypes.instanceOf(Array).isRequired,
  logoHref: PropTypes.string,
};

NavbarDrawer.defaultProps = {
  logoHref: undefined,
};

const StyledDrawer = styled(Drawer)`
  &&& {
    > *:not(:first-of-type) {
      background-color: ${props => props.theme.lightDarkColor};
    }
    * {
      color: ${props => props.theme.whiteColor};
    }
    .drawer-container {
      background-color: ${props => props.theme.lightDarkColor};
    }
  }
`;

const LogoWrapper = styled.div`
  &&& {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 18px 0;

    button:hover {
      text-decoration: none;
      background-color: rgba(255, 255, 255, 0.08);
    }

    button {
      padding: 3px;
      margin: 0 0 0 24px;
    }

    button svg {
      width: 35px;
      height: 35px;
    }
  }
`;

export default NavbarDrawer;
