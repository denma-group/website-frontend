// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/InfoOutlined';
import MailIcon from '@material-ui/icons/Mail';
import Typography from '@material-ui/core/Typography';
import Logo from 'components/SVG/Logos/DenmaHorizontal_NM';

const NavbarDrawer = props => {
  const {
    open,
    closeDrawer,
    ...rest
  } = props;

  const fullList = (
    <StyledList>
      <LogoWrapper>
        <StyledLogo />
        <IconButton
          color="inherit"
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>
      </LogoWrapper>
      <StyledDivider />
      <List>
        {[
          ['Inbox', 'The inbox.'], 
          ['Starred', 'Starred messages!'], 
          ['Send email', 'Send email!'], 
          ['Drafts', 'The drafts.']
        ].map((text, index) => (
          <StyledListItem button key={text[0]}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText
              primary={text[0]}
              secondary={(
                <Typography
                  variant="caption"
                  gutterBottom
                  style={{
                    fontWeight: 'normal'
                  }}
                >
                  {text[1]}
                </Typography>
              )}
            />
          </StyledListItem>
        ))}
      </List>
      <StyledDivider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <StyledListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </StyledListItem>
        ))}
      </List>
    </StyledList>
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
        onClick={closeDrawer}
        onKeyDown={closeDrawer}
      >
        {fullList}
      </div>
    </StyledDrawer>
  );
};

NavbarDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  closeDrawer: PropTypes.func.isRequired
};

const StyledDrawer = styled(Drawer)`
  &&& {
    * {
      color: ${props => props.theme.whiteColor};
    }
    .MuiDrawer-paperAnchorRight-89 {
      background-color: ${props => props.theme.navbarBackground};
    }
    .MuiListItem-button-121:hover {
      text-decoration: none;
      background-color: rgba(255, 255, 255, 0.08);
    }
  }
`;

const StyledListItem = styled(ListItem)`
  &&& {
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    .MuiListItemText-root-130 span {
      font-weight: 600;
    }
    :hover {
      text-decoration: none;
      background-color: rgba(255, 255, 255, 0.08);
      color: ${props => props.theme.secondary}
    }
    :hover * {
      color: ${props => props.theme.primary}
    }
  }
`;

const StyledLogo = styled(Logo)`
  width: 100%;
  height: auto;
  max-width: 225px;
`;

const StyledDivider = styled(Divider)`
  &&& {
    background-color: ${props => props.theme.whiteColor};
    opacity: 0.12;
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

const StyledList = styled.div`
  width: 40vw;
  max-width: 480px;

  @media (max-width: 720px) {
    width: 100vw;
    max-width: none;
  }
`;

export default NavbarDrawer;
