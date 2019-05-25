// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

// Dependencies
import { useOnScrollBgColor } from 'utils/hooks/useOnScrollBgColor';

// Components
import PageWrapper from 'layout/UI/PageWrapper';
import Logo from 'components/SVG/Logos/DenmaHorizontal';

const Homepage = props => {
  const { theme } = props;
  const totalScreenHeight = window.innerHeight;
  const backgroundColor = useOnScrollBgColor(
    [
      [totalScreenHeight * 0, theme.lightDarkColor],
      [totalScreenHeight * 0.25, theme.brandLogoRed],
      [totalScreenHeight * 0.5, theme.brandLogoRed],
      [totalScreenHeight * 0.75, theme.brandRed],
      [totalScreenHeight * 1, theme.brandOrange],
      [totalScreenHeight * 1.25, theme.brandWhite],
    ],
    {
      callback: (bgColor, bracket) => { console.log('bgColor', bgColor); console.log('bracket', bracket); }
    }
  );

  document.body.style.backgroundColor = backgroundColor;

  return (
    <StyledPageWrapper
      backgroundColor={backgroundColor}
    >
      <HeroWrapper>
        <StyledLogo />
      </HeroWrapper>
      <div style={{ minHeight: '300vh' }}>
        <div style={{ minHeight: '100vh' }} />
        <div style={{ minHeight: '100vh' }} />
        <div style={{ minHeight: '100vh' }} />
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
  transition: all ease 200ms;
`;

const HeroWrapper = styled.div`
  color: ${props => props.theme.whiteColor};
  width: 100%;
  height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLogo = styled(Logo)`
  margin: 0 auto;
  width: 70%;
  height: 100%;
`;

export default withTheme(Homepage);
