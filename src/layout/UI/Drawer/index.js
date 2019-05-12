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
import InfoIcon from '@material-ui/icons/Info';
import WorkIcon from '@material-ui/icons/Work';
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
          ['About us', 'Meaning of DENMA, and our values'], 
          ['About our work', 'An overview of how we work alongside our clients'], 
          ['Contact', 'How to get in touch']
        ].map((text, index) => (
          <StyledListItem button key={text[0]}>
            <ListItemIcon>{index % 2 === 0 ? <InfoIcon /> : <WorkIcon />}</ListItemIcon>
            <ListItemText
              primary={(
                <StyledListTitle
                  variant="subheading"
                >
                  {text[0]}
                </StyledListTitle>
              )}
              secondary={(
                <StyledListCaption
                  variant="caption"
                  gutterBottom
                >
                  {text[1]}
                </StyledListCaption>
              )}
            />
          </StyledListItem>
        ))}
      </List>
      <StyledDivider />
      <StyledListHeader variant="title">
        How we work
      </StyledListHeader>
      <List>
        {[
          'Design',
          'Develop',
          'Deliver',
          'Maintain'
        ].map((text, index) => (
          <StyledListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InfoIcon /> : <WorkIcon />}</ListItemIcon>
            <ListItemText
              primary={(
                <StyledListTitle
                  variant="subheading"
                >
                  {text}
                </StyledListTitle>
              )}
              secondary={(
                <StyledListCaption
                  variant="caption"
                  gutterBottom
                >
                  {text}
                </StyledListCaption>
              )}
            />
          </StyledListItem>
        ))}
      </List>
      <StyledDivider />
      <StyledListHeader variant="title">
        How we help
      </StyledListHeader>
      <List>
        {[
          'New Enterprises',
          'Existing Applications',
          'Marketing Strategies and Analytics',
          'Tech Consulting'
        ].map((text, index) => (
          <StyledListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InfoIcon /> : <WorkIcon />}</ListItemIcon>
            <ListItemText
              primary={(
                <StyledListTitle
                  variant="subheading"
                >
                  {text}
                </StyledListTitle>
              )}
              secondary={(
                <StyledListCaption
                  variant="caption"
                  gutterBottom
                >
                  {text}
                </StyledListCaption>
              )}
            />
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

const StyledList = styled.div`
  width: 40vw;
  max-width: 480px;

  @media (max-width: 720px) {
    width: 100vw;
    max-width: none;
  }
`;

const StyledListHeader = styled(Typography)`
  &&& {
    display: flex;
    width: 100%;
    position: relative;
    box-sizing: border-box;
    text-align: left;
    align-items: center;
    margin: 0;
    padding: 19px 11px 11px;
    justify-content: flex-start;
    text-decoration: none;
    user-select: none;
  }
}`;

const StyledListTitle = styled(Typography)`
  &&& {
    transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-weight: 600;
  }
`;

const StyledListCaption = styled(Typography)`
  &&& {
    opacity: 0.75;
    font-weight: normal;
  }
`;

const StyledListItem = styled(ListItem)`
  &&& {
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    :hover {
      text-decoration: none;
      background-color: rgba(255, 255, 255, 0.08);
      color: ${props => props.theme.secondary}
    }
    :hover ${StyledListTitle} {
      color: ${props => props.theme.primary}
    }
  }
`;

export default NavbarDrawer;
