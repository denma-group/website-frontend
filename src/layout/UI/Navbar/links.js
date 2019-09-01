// Libraries
import React, { useContext } from 'react';

// Icons
import InfoIcon from '@material-ui/icons/Info';
// import WorkIcon from '@material-ui/icons/GroupWork';
import ContactIcon from '@material-ui/icons/Mail';
// import DesignIcon from '@material-ui/icons/DeveloperBoard';
// import DevelopIcon from '@material-ui/icons/DeveloperMode';
// import DeliverIcon from '@material-ui/icons/HowToReg';
// import MaintainIcon from '@material-ui/icons/Sync';
import NewEnterprisesIcon from '@material-ui/icons/Business';
import ExistingAppsIcons from '@material-ui/icons/Apps';
// import MarketingIcon from '@material-ui/icons/DataUsage';
// import TechConsultingIcon from '@material-ui/icons/PhoneIphone';

// Components
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from 'src/layout/UI/Navbar/Drawer/ListItem';
import { DropdownMenu } from 'src/components/UI';
import { Header, Divider } from './components';

// Dependencies
import { NavbarContext } from './context';

const links = [
  {
    key: 'what_we_do',
    type: 'button',
    color: 'inherit',
    title: 'What we do',
    caption: 'An overview of how we work alongside our clients.',
    icon: <InfoIcon />,
    href: '/what-we-do',
  },
  {
    key: 'about us',
    type: 'button',
    color: 'inherit',
    title: 'About us',
    caption: 'Who we are',
    icon: <ExistingAppsIcons />,
    href: '/about-us',
  },
  {
    key: 'why_us',
    type: 'button',
    color: 'inherit',
    title: 'Why us?',
    caption: 'Why us? caption',
    icon: <NewEnterprisesIcon />,
    href: '/why-us',
  },
  {
    key: 'contact_us',
    type: 'button',
    color: 'inherit',
    title: 'Contact us',
    caption: 'Say hello, get in touch with us!',
    icon: <ContactIcon />,
    href: '/contact-us',
  }
];

const getShouldRenderDrawerIcon = (navLinks = []) => navLinks.find(link => {
  if (Array.isArray(link)) {
    return link.find(({ mobileOnly }) => mobileOnly);
  }
  const { mobileOnly } = link;
  return mobileOnly;
});

/**
 * `renderNavLinks` recursively renders the navbar's links.
 * If the item is an Array it will call itself.
 * If it's not an array, it will evaluate if the item is a button, or a list,
 * then render the respective component.
 */
const renderNavLinks = (navLinks = []) => navLinks.map((link, index) => {
  const navbarContext = useContext(NavbarContext);
  const [navbarColor] = navbarContext.colorState;
  const [navbarBackgroundColor] = navbarContext.backgroundColorState;

  if (Array.isArray(link)) {
    return (
      <React.Fragment key={index}>
        {renderNavLinks(link)}
      </React.Fragment>
    );
  }
  const { type } = link;
  switch(type) {
    case 'list': {
      // Placeholder before implementing dropdown
      const { key, color, header, items } = link;
      return header && (
        <DropdownMenu
          key={key}
          id={key}
          color={navbarColor || color}
          backgroundColor={navbarBackgroundColor}
          header={header}
          items={items}
        />
      );
    }
    case 'button': {
      const { key, color, title, href } = link;
      return (
        <Link href={href}>
          <Button
            key={key}
            color={color}
          >
            {title}
          </Button>
        </Link>
      );
    }
    default:
      return null;
  }
});

/**
 * `renderDrawerLinks` recursively renders the drawer's links.
 * If the item is an Array it will call itself.
 * If it's not an array, it will evaluate if the item is a button, or a list,
 * then render the respective component.
 */
const renderDrawerLinks = (navLinks = [], listItemProps) => navLinks.map((link, index) => {
  if (Array.isArray(link)) {
    return (
      <React.Fragment key={index}>
        {renderDrawerLinks(link)}
        <Divider />
      </React.Fragment>
    );
  }
  const { type } = link;
  switch(type) {
    case 'list': {
      // Placeholder before implementing dropdown
      const { key, header, color, items } = link;
      return header && (
        <React.Fragment
          key={key}
        >
          <Header
            color={color}
          >
            {header}
          </Header>
          <List>
            {items.map(item => (
              <ListItem
                key={item.title}
                {...item}
                {...listItemProps}
              />
            ))}
          </List>
          <Divider />
        </React.Fragment>
      );
    }
    case 'button': {
      const { key, icon, title, caption, href } = link;
      return (
        <React.Fragment
          key={key}
        >
          <ListItem
            key={key}
            title={title}
            icon={icon}
            caption={caption}
            href={href}
          />
          <Divider />
        </React.Fragment>
      );
    }
    default:
      return null;
  }
});

export {
  links,
  getShouldRenderDrawerIcon,
  renderNavLinks,
  renderDrawerLinks,
};
