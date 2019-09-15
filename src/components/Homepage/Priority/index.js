// Libraries
import React, { useContext } from 'react';
import styled, { css } from 'styled-components';

// Components
import { H1 } from 'src/components/UI/Text';
import { ActiveSlideThemeContext } from '../HeroSlider';

const Priority = () => {
  const { activeSlideTheme } = useContext(ActiveSlideThemeContext);

  return (
    <Wrapper>
      <Container
        activeSlideTheme={activeSlideTheme}
      >
        <StyledHeader
          align="center"
        >
          Are you ready to invest in your <span>vision</span>?
        </StyledHeader>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${({ theme, activeSlideTheme }) => css`
      linear-gradient(0deg, ${theme.whiteColor} 75%, ${activeSlideTheme || theme.servify} 100%)
    `};
    opacity: 0.25;
  }

  h1 {
    z-index: 1;
  }
`;

const StyledHeader = styled(H1)`
  &&& {
    margin: 1rem;
  }
  &&& span {
    color: ${props => props.theme.primary};
  }
  &&&, span {
    font-weight: 700;
  }
`;

export default Priority;
