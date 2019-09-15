// Libraries
import React, { useState, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

// Dependencies
import servifyBg from 'static/images/hero_slider/servify/slide-bg.jpg';
import bopreuFoodsBg from 'static/images/hero_slider/bonpreu_foods/slide-bg.jpg';
import tireOutletBg from 'static/images/hero_slider/tire_outlet/slide-bg.jpg';

// Assets
import servifyLogo from 'static/images/hero_slider/servify/logo.png';
import bonpreuFoodsLogo from 'static/images/hero_slider/bonpreu_foods/logo.png';
import tireOutletLogo from 'static/images/hero_slider/tire_outlet/logo.png';

// Components
import HeroSlider, {
  Nav
} from 'hero-slider';
import SlideWrapper from './SlideWrapper';
import Slide from './Slide';

export const ActiveSlideThemeContext = React.createContext({
  activeSlideTheme: undefined
});

/**
 * The active slide `theme` will be passed to the background
 * attached divider component to set the bottom gradient's color
 * equal to the active slide's color.
 */
export const ActiveSlideThemeProvider = withTheme(props => {
  const { children, theme } = props;
  const [activeSlideTheme, setActiveSlideTheme] = useState(theme.servify);
  return useMemo(() => (
    <ActiveSlideThemeContext.Provider
      value={{
        activeSlideTheme,
        setActiveSlideTheme
      }}
    >
      {children}
    </ActiveSlideThemeContext.Provider>
  ), [activeSlideTheme, setActiveSlideTheme, children]);
});

const Slider = props => {
  const { theme } = props;
  const { setActiveSlideTheme } = useContext(ActiveSlideThemeContext);

  const onChangeHandler = nextSlide => {
    switch (nextSlide) {
      case 1:
        return setActiveSlideTheme(theme.servify);
      case 2:
        return setActiveSlideTheme(theme.bonpreuFoods);
      case 3:
        return setActiveSlideTheme(theme.tireOutlet);
      default: // Do nothing
    }
  };

  const slidesBackgrounds = {
    shouldLazyLoad: false,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
  };

  const slides = [
    {
      key: 'servify',
      slideColor: theme.servify,
      backgroundImage: servifyBg,
      background: slidesBackgrounds,
      title: 'Servify',
      caption: 'Denma helped us solidify our corporate image and strategy.',
      src: servifyLogo,
      slideNumber: 1,
    },
    {
      key: 'bonpreu_foods',
      slideColor: theme.bonpreuFoods,
      backgroundImage: bopreuFoodsBg,
      background: slidesBackgrounds,
      title: 'Bonpreu Foods',
      caption: 'At Denma, we were treated as partners from day one.',
      src: bonpreuFoodsLogo,
      slideNumber: 2,
    },
    {
      key: 'tire_outlet',
      slideColor: theme.tireOutlet,
      backgroundImage: tireOutletBg,
      background: slidesBackgrounds,
      title: 'Tire Outlet',
      caption: 'Denma allowed our business to achieve web sales that we would have missed otherwise.',
      src: tireOutletLogo,
      slideNumber: 3,
    },
  ];

  return (
    <HeroSlider
      slidingAnimation="left_to_right"
      orientation="horizontal"
      initialSlide={1}
      settings={props.settings}
      onChange={onChangeHandler}
    >
      {props.children}
      {/* SERVIFY */}
      {slides.map(({ key, slideColor, backgroundImage, background, ...rest }) => (
        <SlideWrapper
          key={key}
          background={{
            ...background,
            backgroundImage,
          }}
          overlayColor={slideColor}
        >
          <Slide
            slideThemeColor={slideColor}
            {...rest}
          />
        </SlideWrapper>
      ))}
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
