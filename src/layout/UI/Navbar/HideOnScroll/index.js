// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Dependencies
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

// Components
import Slide from '@material-ui/core/Slide';

// Wrap the navbar inside HideOnScroll to hide it when the user
// scrolls down.
const HideOnScroll = props => {
  const { children } = props;
  // useScrollTrigger will default to window.
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export default HideOnScroll;
