// Libraries
import React, { useState, useRef, useCallback, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import Rellax from 'rellax';

// Hooks
import { useOnScrollCallback } from 'utils/hooks';

const Parallax = props => {
  const {
    speed = 1,
    width = '100%',
    height = '100%',
    top = '0%',
    left = '0%',
    right,
    position = 'absolute',
    zIndex = 0,
    backgroundRepeat = 'no-repeat',
    backgroundPosition = 'center',
    backgroundSize = 'cover',
    backgroundColor = null,
  } = props;

  const myParallax = useRef(null);

  const rellax = useMemo(() => (myParallax ? new Rellax(myParallax.current) : null), [myParallax.current]);

  useEffect(() => {
    console.log('inside rellax useEffect', rellax);
    if (rellax.elms) rellax.refresh();
    return () => {
      if (rellax.elms) rellax.destroy();
    };
  }, [rellax]);

  const image = props.backgroundImage && `url(${props.backgroundImage})`;

  // Initial parallax style
  const [parallaxStyle, setParallaxStyle] = useState({
    width,
    height,
    top,
    // left,
    // right,
    position,
    // zIndex,
    // backgroundRepeat,
    // backgroundPosition,
    // backgroundSize,
    // backgroundColor,
    backgroundImage: image
  });

  const getAbsoluteTop = useCallback(() => {
    const absoluteTop = String(top).includes('%') ?
      window.innerHeight * (String(top).replace('%', '')) :
      parseInt(top, 10);
    return absoluteTop;
  }, [top]);

  const handleScroll = () => {
    console.log('inside handleScroll');
    const absoluteTop = getAbsoluteTop();
    // Parallax speed and current top.
    // Calculate the new top depending on the number of pixels from the window top.
    const pageTop = window.scrollY;
    const newTop = (absoluteTop - (pageTop * speed));
    console.log('absoluteTop', absoluteTop);
    console.log('pageTop', pageTop);
    console.log('newTop', newTop);
    // Set the new top position.
    // setParallaxStyle({
    //   ...parallaxStyle,
    //   top: `${newTop}px`,
    // });
    // if (parallaxElement.current) parallaxElement.current.style.top = `${newTop}px`;
  };

  // useOnScrollCallback({
  //   callback: handleScroll
  // });

  return (
    <div
      style={{
        ...parallaxStyle
      }}
      ref={myParallax}
      data-rellax-speed="-10"
      data-rellax-percentage="0.5"
    >
      <h1>Parallax</h1>
    </div>
  );
};

Parallax.propTypes = {
  speed: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  left: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  position: PropTypes.string,
  zIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  backgroundRepeat: PropTypes.string,
  backgroundPosition: PropTypes.string,
  backgroundSize: PropTypes.string,
  backgroundColor: PropTypes.string,
  backgroundImage: PropTypes.string,
};

Parallax.defaultProps = {
  speed: 1,
  width: '100%',
  height: '100%',
  top: '0%',
  left: '0%',
  right: undefined,
  position: 'absolute',
  zIndex: 0,
  backgroundRepeat: undefined,
  backgroundPosition: undefined,
  backgroundSize: undefined,
  backgroundColor: undefined,
  backgroundImage: undefined,
};

export default Parallax;
