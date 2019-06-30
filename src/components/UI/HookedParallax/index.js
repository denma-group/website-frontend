import React from 'react';
import PropTypes from 'prop-types';
import { useTranslateContent } from '../../../utils/hooks/useTranslateContent';

const HookedParallax = (props) => {
  const { multiplierY, style, children } = props;

  const { translateYVals } = useTranslateContent(multiplierY);

  return <div style={{ ...style, transform: `translateY(${translateYVals}px)` }}>{children}</div>;
};

HookedParallax.propTypes = {
  multiplierY: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  style: PropTypes.object
};

HookedParallax.defaultProps = {
  style: {}
};

export default HookedParallax;
