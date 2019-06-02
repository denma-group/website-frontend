// Libraries
import React, { useContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import styled, { css, withTheme } from 'styled-components';

// Dependencies
import { useOnScrollBgColor } from 'utils/hooks/useOnScrollBgColor';

// Components
import Particles from 'react-particles-js';
import HeroPattern from 'layout/Homepage/HeroPattern';
import { NavbarContext } from 'layout/UI/Navbar';
import PageWrapper from 'layout/UI/PageWrapper';
import Logo from 'components/SVG/Logos/DenmaHorizontal';
import Typography from '@material-ui/core/Typography';

// Icons
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

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

  const handleOnScrollBgColor = ({
    mixRatio,
    bracket,
    currentScrollHeight
  }) => {
    const lowerBracketHeight = bracket[1][0];
    const totalScrollRatio = Number(currentScrollHeight / BRACKET_5_HEIGHT).toFixed(2);
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
      case currentScrollHeight <= BRACKET_5_HEIGHT:
        setHeroCss({
          pattern: (
            css`
              opacity: ${totalScrollRatio};
              transform: translateY(${-baseTransformProp * 0.25}px);
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
              transform: translateY(${-baseTransformProp * 1.5}px);
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
          transform: translateY(0);
        `);
        break;
      case lowerBracketHeight <= BRACKET_4_HEIGHT:
        // Begin changing colors
        setNavbarCss(css`
          opacity: ${0};
          color: ${theme.brandLightBlack};
          background-color: transparent;
          box-shadow: none;
          transform: translateY(-64px);
        `);
        break;
      case lowerBracketHeight >= BRACKET_5_HEIGHT:
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
      [BRACKET_5_HEIGHT, theme.brandWhite],
    ],
    {
      callback: handleOnScrollBgColor,
      throttleLimit: 25
    }
  );

  document.body.style.backgroundColor = backgroundColor;
  console.log('heroCss.particles', heroCss.particles);

  const Container = useMemo(() => (styled.div`
    width: 100%;
    height: ${totalScreenHeight}px;
    ${({ styledCss }) => styledCss};
  `), [totalScreenHeight]);

  return (
    <StyledPageWrapper
      backgroundColor={backgroundColor}
    >
      <HeroWrapper>
        <LogoContainer
          css={heroCss.logo}
        >
          <StyledLogo />
          <ArrowDownwardIcon className="scroll-down" />
        </LogoContainer>
        {heroCss.particles && (
          <React.Fragment>
            <HeroPattern css={heroCss.pattern} />
            <StyledParticles params={particlesSettings} />
          </React.Fragment>
        )}
      </HeroWrapper>
      <Container
        styledCss={(css`
          height: ${totalScreenHeight * 0.25}px;
        `)}
      />
      <Container
        styledCss={(css`
          display: flex;
          align-items: center;
          justify-content: flex-start;
          text-align: left;
          width: 100%;
          max-width: 1200px;
          margin-right: auto;
          margin-left: auto;
          padding: 0 37px;
        `)}
      >
        <StyledHeroValueProposition variant="h1">
          For companies who find themselves in need of <span>high-quality</span> software applications, <span>Denma</span> is a software development studio that provides personalized software development services with a solid methodology to help companies take their businesses to the <span>next level</span>.
        </StyledHeroValueProposition>
      </Container>
      <Container>
        Hero Slider
      </Container>
      <div style={{ minHeight: 3 * totalScreenHeight }}>
        <div style={{ minHeight: totalScreenHeight, position: 'relative' }}>
          <h1>Value Props</h1>
        </div>
        <div style={{ minHeight: totalScreenHeight }} />
        <div style={{ minHeight: totalScreenHeight }} />
      </div>
    </StyledPageWrapper>
  );
};

Homepage.propTypes = {
  theme: PropTypes.instanceOf(Object).isRequired
};

const StyledPageWrapper = styled(PageWrapper)`
  color: ${props => props.theme.lightDarkColor};
  background-color: ${props => props.backgroundColor || props.theme.lightDarkColor};
  transition: all ease 100ms;
`;

const HeroWrapper = styled.div`
  position: relative;
  color: ${props => props.theme.whiteColor};
  width: 100%;
  height: ${1.25 * window.innerHeight}px;
  overflow: hidden;
  pointer-events: none;

  ${Particles} {
    transition: transform ease 100ms;
  }

  & > *:last-child {
    pointer-events: auto;
    height: 100%;
  }
`;

const LogoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  color: ${props => props.theme.whiteColor};
  width: 100%;
  height: ${window.innerHeight}px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  z-index: 5;
  transition: all ease 250ms;

  ${props => props.css}

  .scroll-down {
    width: 80px;
    height: 80px;
    padding: 0 0 24px;
    cursor: pointer;
    pointer-events: auto;
  }
`;

const StyledLogo = styled(Logo)`
  margin: 0 auto;
  width: 70%;
  height: 100%;
`;

const StyledParticles = styled(Particles)`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const StyledHeroValueProposition = styled(Typography)`
  &&& {
    font-size: 54px;
    line-height: 64px;
    span {
      font-size: 54px;
      line-height: 64px;
      font-weight: 500;
      color: ${props => props.theme.primary}
    }
  }
`;

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
