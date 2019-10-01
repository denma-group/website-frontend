// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Dependencies
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

// Wrap the navbar inside HideOnScroll to hide it when the user
// scrolls down.
export default function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because this is Next.JS.
  const shouldSlideUp = !useScrollTrigger({ target: window ? window() : undefined });

  if (typeof window === 'undefined') {
    return children;
  }

  switch(shouldSlideUp) {
    case true:
      return React.cloneElement(
        children,
        {
          style: {
            transform: null,
          }
        }
      );
    default:
      return React.cloneElement(
      children,
      {
        style: {
          transform: 'translateY(-100%)',
        }
      }
    );
  }
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};
