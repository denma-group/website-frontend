// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

// Components
import {
  Row,
  Col,
} from 'src/components/Layout';
import { LazyImage } from 'src/components/UI';
import { H1, P } from 'src/components/UI/Text';

// TODO: New Slide Structuring
/**
 * It will look like this:
 * --------------------
 *             ''
 * LOGO   COMPANY NAME
 * LOGO       NAME
 * LOGO    TESTIMONIAL
 *
 * --------------------
 */

const Slide = props => {
  const {
    title,
    caption,
    src,
    slideNumber,
    slideThemeColor,
  } = props;
  return (
    <Wrapper>
      <StyledRow
        alignItems="center"
        spacing={5}
      >
        <InformationContainer
          slideNumber={slideNumber}
          alignItems="center"
          sm={12}
          md={7}
        >
          <StyledH1
            slideThemeColor={slideThemeColor}
          >
            {title}
          </StyledH1>
          <i>
            <StyledP slideThemeColor={slideThemeColor}>
              {caption}
            </StyledP>
          </i>
        </InformationContainer>
        <ImageContainer
          slideNumber={slideNumber}
          alignItems="center"
          sm={0}
          md={5}
        >
          <LazyImage
            draggable={false}
            src={src}
          />
        </ImageContainer>
      </StyledRow>
    </Wrapper>
  );
};

Slide.propTypes = {
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  slideNumber: PropTypes.number.isRequired,
  slideThemeColor: PropTypes.number.isRequired,
};

const Wrapper = styled.div`
  &&& {
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const StyledRow = styled(Row)`
  &&& {
    max-width: 1200px;
    padding: 0 120px;
    margin: 0 -20px;
    @media (max-width: ${({ theme }) => theme.screenLg}) {
      padding: 0 24px;
      flex-flow: column;
      align-items: center;
      justify-content: center;
    }
  }
`;

const InformationContainer = styled(Col)`
  &&& {
    display: flex;
    flex-flow: column;
    align-items: center;
    color: ${({ theme }) => theme.whiteColor};

    h1 {
      font-weight: bold;
      text-align: center;
      font-size: 48px;
    }

    i {
      display: flex;
      justify-content: center;
      p {
        font-size: 24px;
        text-decoration: none;
        text-align: center;
      }
    }

    @media (min-width: ${({ theme }) => theme.screenLg}) {
      order: ${({ slideNumber }) => (slideNumber % 2 === 0 ? 2 : 'initial')};
    }

    @media (max-width: ${({ theme }) => theme.screenLg}) {
      flex: 0 !important;
    }
  }
`;

const ImageContainer = styled(Col)`
  &&& {
    max-height: 100%;
    @media (max-width: ${({ theme }) => theme.screenLg}) {
      flex: 0 !important;
    }
    img {
      display: block;
      max-height: 200px;
      margin: 0 auto;
      @media (max-width: ${({ theme }) => theme.screenMd}) {
        max-width: 66%;
      }
      @media (max-width: ${({ theme }) => theme.screenSm}) {
        display: none;
      }
    }
  }
`;

// const primaryColor = css`${({ theme }) => theme.primary}`;
const whiteColor = css`${({ theme }) => theme.whiteColor}`;

const StyledH1 = styled(H1)`
  &&& {
    display: inline-block;
    margin: 0 auto 36px;
    font-weight: 700;
    text-align: center;
    color: ${whiteColor};
    .underscore {
      position: relative;
      &:before {
        position: absolute;
        content: '';
        left: 0;
        bottom: -4px;
        width: 100%;
        height: 4px;
        border-radius: 8px;
        background-color: ${({ slideThemeColor }) => slideThemeColor};
      }
    }
  }
`;

const StyledP = styled(P)`
  &&& {
    position: relative;
    margin: 4px 22px;
    padding: 0 18px;
    max-width: 66%;
    &:before, &:after {
      position: absolute;
      top: -20px;
      font-weight: bold;
      font-size: 3.535rem;
      color: ${({ slideThemeColor }) => slideThemeColor};
    }
    &:before {
      right: 100%;
      content: open-quote;
    }
    &:after {
      left: 100%;
      content: close-quote;
    }
  }
`;

export default Slide;
