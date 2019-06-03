// Libraries
import React, { useContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import styled, { css, withTheme } from 'styled-components';

// Dependencies
import { useOnScrollBgColor } from 'utils/hooks/useOnScrollBgColor';

// Components
import HeroPattern from 'layout/Homepage/HeroPattern';
import { NavbarContext } from 'layout/UI/Navbar';
import HeroSlider from 'components/Homepage/HeroSlider';

// Icons
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

// Styled Components
import {
  StyledPageWrapper,
  HeroWrapper,
  LogoContainer,
  StyledLogo,
  StyledParticles,
  StyledHeroValueProposition
} from './components';

const Homepage = props => {
  const { theme } = props;
  const navbarContext = useContext(NavbarContext);
  const setNavbarCss = navbarContext.cssState[1];
  const [heroCss, setHeroCss] = useState({
    pattern: (
      css`
        opacity: 0
      `
    ),
    logo: undefined,
    particles: undefined
  });

  /**
   * Background color brackets.
   */
  const totalScreenHeight = window.innerHeight;
  const BRACKET_1_HEIGHT = totalScreenHeight * 0;
  const BRACKET_2_HEIGHT = totalScreenHeight * 0.25;
  const BRACKET_3_HEIGHT = totalScreenHeight * 0.5;
  const BRACKET_4_HEIGHT = totalScreenHeight * 0.75;
  const BRACKET_5_HEIGHT = totalScreenHeight * 1;
  const BRACKET_6_HEIGHT = totalScreenHeight * 1.25;

  const handleOnScrollBgColor = ({
    mixRatio,
    bracket,
    currentScrollHeight
  }) => {
    const lowerBracketHeight = bracket[1][0];
    const totalScrollRatio = Number(currentScrollHeight / BRACKET_5_HEIGHT).toFixed(2);
    const opacityRatio = (1 - totalScrollRatio) <= 0 ? 0 : 1 - totalScrollRatio; 
    console.log('opacityRatio', opacityRatio);
    /**
     * Handling hero patterns.
     */
    const baseTransformProp = Number(currentScrollHeight * totalScrollRatio).toFixed(2);
    switch (true) {
      case currentScrollHeight <= BRACKET_1_HEIGHT:
        setHeroCss({
          pattern: (
            css`
              opacity: 0;
            `
          ),
          logo: undefined,
          particles: true
        });
        break;
      case currentScrollHeight <= BRACKET_2_HEIGHT:
        setHeroCss({
          pattern: (
            css`
              opacity: 0;
            `
          ),
          logo: (
            css`
              transform: translateY(${-baseTransformProp * 1.5}px);
            `
          ),
          particles: true
        });
        break;
      case currentScrollHeight <= BRACKET_6_HEIGHT:
        setHeroCss({
          pattern: (
            css`
              opacity: ${opacityRatio};
              transform: translateY(${-baseTransformProp * 0.25}px);
            `
          ),
          logo: (
            css`
              transform: translateY(${-baseTransformProp * 2}px);
            `
          ),
          particles: true
        });
        break;
      default:
        setHeroCss({
          pattern: (
            css`
              transform: translateY(${-baseTransformProp * 0.25}px);
              opacity: 0
            `
          ),
          logo: (
            css`
              transform: translateY(${-baseTransformProp * 2}px);
            `
          ),
          particles: false // Unmounts the particles
        });
    }
    /**
     * Navbar handlers.
     */
    switch (true) {
      case lowerBracketHeight <= BRACKET_2_HEIGHT:
         // Partially hide Navbar
        setNavbarCss(css`
          opacity: ${1 - mixRatio};
          color: ${theme.whiteColor};
          background-color: transparent;
          box-shadow: none;
        `);
        break;
      case lowerBracketHeight <= BRACKET_3_HEIGHT:
        // Hide Navbar
        setNavbarCss(css`
          opacity: ${0};
          color: ${theme.whiteColor};
          background-color: transparent;
          box-shadow: none;
        `);
        break;
      case lowerBracketHeight <= BRACKET_4_HEIGHT:
        // Begin changing colors
        setNavbarCss(css`
          opacity: ${0};
          color: ${theme.brandLightBlack};
          background-color: transparent;
          box-shadow: none;
        `);
        break;
      case lowerBracketHeight >= BRACKET_6_HEIGHT:
        // Show Navbar
        setNavbarCss(css`
          opacity: ${mixRatio};
          color: ${theme.brandLightBlack};
          background-color: ${theme.whiteColor};
          transform: translateY(0);
        `);
        break;
      default:
        // Do nothing.
    }
  };
  const backgroundColor = useOnScrollBgColor(
    [
      [BRACKET_1_HEIGHT, theme.lightDarkColor],
      [BRACKET_2_HEIGHT, theme.brandLogoRed],
      [BRACKET_3_HEIGHT, theme.brandLogoRed],
      [BRACKET_4_HEIGHT, theme.brandRed],
      [BRACKET_5_HEIGHT, theme.brandOrange],
      [BRACKET_6_HEIGHT, theme.brandWhite],
    ],
    {
      callback: handleOnScrollBgColor,
      throttleLimit: 0
    }
  );

  document.body.style.backgroundColor = backgroundColor;

  const Container = useMemo(() => (styled.div`
    height: ${totalScreenHeight}px;
    ${({ styledCss }) => styledCss};
  `), [totalScreenHeight]);

  const { logo, pattern, particles } = heroCss;

  return (
    <StyledPageWrapper
      backgroundColor={backgroundColor}
    >
      <HeroWrapper>
        <LogoContainer
          css={logo}
        >
          <StyledLogo />
          <ArrowDownwardIcon className="scroll-down" />
        </LogoContainer>
        {particles && (
          <React.Fragment>
            <HeroPattern css={pattern} />
            <StyledParticles params={particlesSettings} />
          </React.Fragment>
        )}
      </HeroWrapper>
      <Container
        styledCss={(css`
          display: flex;
          align-items: center;
          justify-content: flex-start;
          text-align: left;
          max-width: 1200px;
          margin-right: auto;
          margin-left: auto;
          padding: 0 40px;
        `)}
      >
        <StyledHeroValueProposition variant="h1">
          For companies who find themselves in need of <span>high-quality</span> software applications, <span>Denma</span> is a software development studio that provides personalized software development services with a solid methodology to help companies take their businesses to the <span>next level</span>.
        </StyledHeroValueProposition>
      </Container>
      <Container>
        <HeroSlider
          settings={{
            slidingDuration: 250,
            slidingDelay: 100,
            shouldAutoplay: true,
            shouldDisplayButtons: true,
            autoplayDuration: 20000,
            height: 0.9 * (totalScreenHeight - 64),
            color: '#FFF'
          }}
        />
      </Container>
      <Container />
    </StyledPageWrapper>
  );
};

Homepage.propTypes = {
  theme: PropTypes.instanceOf(Object).isRequired
};

const particlesSettings = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: false
      }
    },
    size: {
      value: 6,
      random: true,
      anim: {
        speed: 8,
        size_min: 0.3
      }
    },
    line_linked: {
      enable: false
    },
    move: {
      random: true,
      speed: 1.5,
      direction: 'bottom',
      out_mode: 'out'
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'bubble'
      },
      onclick: {
        enable: true,
        mode: 'repulse'
      }
    },
    modes: {
      bubble: {
        distance: 250,
        duration: 2,
        size: 0,
        opacity: 0
      },
      repulse: {
        distance: 400,
        duration: 4
      }
    }
  }
};

export default withTheme(Homepage);
