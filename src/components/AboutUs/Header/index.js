// Libraries
import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme, css } from 'styled-components';

// Components
import ReactResizeDetector from 'react-resize-detector';
import HookedParallax from 'src/components/UI/HookedParallax';
import Button from '@material-ui/core/Button';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import * as Text from 'src/components/UI/Text';

const Header = props => {
  // States
  const [screenHeight, setScreenHeight] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  // Functions
  const ArrowDownClickHandler = useCallback(() => {
    if (props.scrollRef && props.scrollRef.current) {
      props.scrollRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest',
      });
    }
  }, [props.scrollRef]);

  return (
    <HeaderStyle>
      <ReactResizeDetector
        handleWidth
        handleHeight
        onResize={() => {
          setScreenHeight(window.innerHeight);
          setScreenWidth(window.innerWidth);
        }}
      />
      <HeaderContainer height={screenHeight}>
        <Text.H1
          css={css`
            color: ${props.theme.brandWhite};
            @media (max-width: ${({ theme }) => theme.screenMd}) {
              &&& {
                font-size: 30px;
              }
            }
          `}
        >
          Denma is a
          <Text.Span
            css={css`
              color: ${props.theme.brandDarkRed};
            `}
          >
            {' '}
            digital product agency
          </Text.Span>{' '}
          that focuses on
          <Text.Span
            css={css`
              color: ${props.theme.brandRed};
            `}
          >
            {' '}
            apartnerships
          </Text.Span>{' '}
          to deliver
          <SpanText color={props.theme.brandOrange}> quality.</SpanText>
        </Text.H1>
        <GradientButton color1={props.theme.brandDarkRed} color2={props.theme.brandOrange}>
          Contact Us
        </GradientButton>
        {!!screenWidth && (
          <HookedParallax
            multiplierY={2}
            style={{
              marginTop: 20,
              position: 'absolute',
              bottom: screenWidth > 900 ? -250 : -150,
              right: screenWidth > 900 ? -250 : -150,
              zIndex: 10,
              overflow: 'hidden',
            }}
          >
            <Circle size={screenWidth > 900 ? 500 : 300} color={props.theme.brandDarkRed}>
              <ArrowDownwardIcon onClick={ArrowDownClickHandler} className="scroll-down" />
            </Circle>
          </HookedParallax>
        )}
      </HeaderContainer>
    </HeaderStyle>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: ${props => `${props.height - 200}px`};
  width: 60%;
  margin-left: 120px;
  margin-top: 200px;
  overflow: hidden;
  @media (max-width: ${({ theme }) => theme.screenMd}) {
    margin-top: 100px;
    margin-left: 60px;
  }
  @media (max-width: ${({ theme }) => theme.screenSm}) {
    width: 80%;
  }
`;

const SpanText = styled.span`
  font-size: inherit;
  font-weight: 500;
  color: ${props => props.color};
`;

const HeaderStyle = styled.div`
  display: flex;
  background-color: ${props => props.backgroundColor || props.theme.lightDarkColor};
  color: ${props => props.theme.primary};
`;

const GradientButton = styled(Button)`
  &&& {
    background: ${props => `linear-gradient(45deg, ${props.color1} 30%, ${props.color2} 200%);`};
    border-radius: 50px;
    border: 0;
    color: ${props => props.theme.brandWhite};
    height: 50px;
    font-weight: bold;
    width: 400px;
    margin-top: 20px;
    font-size: 42px;
    margin-top: 40px;

    @media (max-width: ${({ theme }) => theme.screenMd}) {
      margin-top: 40px;
      width: 200px;
    }
  }
`;

const Circle = styled.div`
  display: flex;
  height: ${props => `${props.size}px`};
  width: ${props => `${props.size}px`};
  border-radius: 50%;
  background-color: ${props => props.color};
  justify-content: center;
  align-items: center;
  .scroll-down {
    width: 80px;
    height: 80px;
    padding: 0 0 24px;
    cursor: pointer;
    pointer-events: auto;
    color: white;
    right: ${props => `${props.size / 5}px`};
    bottom: ${props => `${props.size / 6}px`};
    position: relative;
  }
`;

Header.propTypes = {
  theme: PropTypes.instanceOf(Object).isRequired,
  scrollRef: PropTypes.instanceOf(Object).isRequired,
};

export default withTheme(Header);
