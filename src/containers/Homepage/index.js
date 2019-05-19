// Libraries
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

// Dependencies
import { useOnScrollBgColor } from 'utils/hooks/useOnScrollBgColor';

// Components
import PageWrapper from 'layout/UI/PageWrapper';
import Logo from 'components/SVG/Logos/DenmaHorizontal';

const Homepage = props => {
  const { theme } = props;
  const [backgroundColor, setBackgroundColor] = useState(theme.lightDarkColor);
  useOnScrollBgColor(
    [theme.lightDarkColor, theme.brandRed],    
    setBackgroundColor
  );

  console.log('backgroundColor', backgroundColor);

  return (
    <StyledPageWrapper
      backgroundColor={backgroundColor}
    >
      <HeroWrapper>
        <StyledLogo />
      </HeroWrapper>
      <div style={{ minHeight: '100vh' }} />
    </StyledPageWrapper>
  );
};

Homepage.propTypes = {
  theme: PropTypes.instanceOf(Object).isRequired
};

const StyledPageWrapper = styled(PageWrapper)`
  color: ${props => props.theme.whiteColor};
  background-color: ${props => props.backgroundColor || props.theme.lightDarkColor};
  transition: all ease 200ms;
`;

const HeroWrapper = styled.div`
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
