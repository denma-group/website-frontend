import React from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import { useTranslateContent } from '../../../utils/hooks/useTranslateContent';

const HookedParallax = (props) => {
  const { multiplierY, style, children } = props;
  const [ref, inView] = useInView({
    threshold: 0
  });
  const { translateYVals } = useTranslateContent([
    { multipliersY: multiplierY, translateY: inView }
  ]);

  return (
    <div ref={ref} style={{ ...style, transform: `translateY(${translateYVals[0]}px)` }}>
      {children}
    </div>
  );
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
