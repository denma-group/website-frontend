// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Components
import HeroSlider, {
  Slide,
  Nav,
  // SideNav,
  // MenuNav,
  // ButtonsNav,
  // AutoplayButton
} from 'hero-slider';

// Images
import bogliasco from './Bogliasco - Italy.jpg';
import countyClare from './County Clare - Ireland.jpg';
import craterRock from './Crater Rock - United States.jpg';
import giauPass from './Giau Pass - Italy.jpg';

const Slider = props => (
  <HeroSlider
    slidingAnimation="left_to_right"
    orientation="horizontal"
    initialSlide={1}
    style={{
      backgroundColor: 'rgba(0, 0, 0, 0.33)'
    }}
    settings={props.settings}
  >
    {props.children}
    <Slide
      background={{
        backgroundImage: giauPass,
        backgroundAttachment: 'fixed'
      }}
    />
    <Slide
      background={{
        backgroundImage: bogliasco,
        backgroundAttachment: 'fixed'
      }}
    />
    <Slide
      background={{
        backgroundImage: countyClare,
        backgroundAttachment: 'fixed'
      }}
    />
    <Slide
      background={{
        backgroundImage: craterRock,
        backgroundAttachment: 'fixed'
      }}
    />
    <Nav />
  </HeroSlider>
);

Slider.propTypes = {
  settings: PropTypes.instanceOf(Object).isRequired,
  children: PropTypes.node.isRequired,
};

export default Slider;
