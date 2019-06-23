// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

// Components
import HeroSlider, {
  Slide,
  Nav
} from 'hero-slider';

import Servify from './Slides/Servify';
import BonpreuFoods from './Slides/BonpreuFoods';
import TireOutlet from './Slides/TireOutlet';

const Slider = props => {
  const { theme } = props;
  return (
    <HeroSlider
      slidingAnimation="left_to_right"
      orientation="horizontal"
      initialSlide={1}
      settings={props.settings}
    >
      {props.children}
      {/* SERVIFY */}
      <Slide
        background={{
          shouldLazyLoad: false,
          backgroundColor: theme.servify
        }}
      >
        <Servify />
      </Slide>
      {/* BONPREU? */}
      <Slide
        background={{
          shouldLazyLoad: false,
          backgroundColor: theme.bonpreuFoods
        }}
      >
        <BonpreuFoods />
      </Slide>
      {/* TIRE OUTLETS */}
      <Slide
        background={{
          shouldLazyLoad: false,
          backgroundColor: theme.tireOutlet
        }}
      >
        <TireOutlet />
      </Slide>
      <Nav />
    </HeroSlider>
  );
};

Slider.propTypes = {
  settings: PropTypes.instanceOf(Object).isRequired,
  theme: PropTypes.instanceOf(Object).isRequired,
  children: PropTypes.node
};

Slider.defaultProps = {
  children: null
};

export default withTheme(Slider);
