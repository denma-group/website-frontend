// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

// Components
import HeroSlider, {
  Slide,
  Nav
} from 'hero-slider';
import Typography from '@material-ui/core/Typography';

const Slider = props => (
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
        backgroundColor: props.theme.servify
      }}
    >
      <SliderInner>
        <Typography variant="h1">Servify</Typography>
      </SliderInner>
    </Slide>
    {/* BONPREU? */}
    <Slide
      background={{
        shouldLazyLoad: false,
        backgroundColor: props.theme.bonpreuFoods
      }}
    >
      <SliderInner>
        <Typography variant="h1">Bonpreu Foods</Typography>
      </SliderInner>
    </Slide>
    {/* TIRE OUTLETS */}
    <Slide
      background={{
        shouldLazyLoad: false,
        backgroundColor: props.theme.tireOutlet
      }}
    >
      <SliderInner>
        <Typography variant="h1">Tire Outlets</Typography>
      </SliderInner>
    </Slide>
    <Nav />
  </HeroSlider>
);

Slider.propTypes = {
  settings: PropTypes.instanceOf(Object).isRequired,
  theme: PropTypes.instanceOf(Object).isRequired,
  children: PropTypes.node
};

Slider.defaultProps = {
  children: null
};

const SliderInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ styledCss }) => styledCss};
`;

export default withTheme(Slider);
