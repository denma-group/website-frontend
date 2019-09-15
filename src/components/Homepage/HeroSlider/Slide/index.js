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
          <Underscore
            slideThemeColor={slideThemeColor}
          />
          <i><P>{caption}</P></i>
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
  max-width: 1200px;
  padding: 0 120px;
  margin: 0 -20px;
  @media (max-width: ${({ theme }) => theme.screenSm}) {
    padding: 0 24px;
  }
`;

const InformationContainer = styled(Col)`
  &&& {
    order: ${({ slideNumber }) => (slideNumber % 2 === 0 ? 2 : 'initial')};
    color: ${({ theme }) => theme.whiteColor};

    h1 {
      font-weight: bold;
      text-align: center;
    }

    p {
      margin-top: 4px;
      font-size: 24px;
      text-decoration: none;
      text-align: center;
    }
  }
`;

const ImageContainer = styled(Col)`
  &&& {
    max-height: 100%;
    img {
      max-height: 300px;
      margin: 0 auto;
    }
  }
`;

// const primaryColor = css`${({ theme }) => theme.primary}`;
const whiteColor = css`${({ theme }) => theme.whiteColor}`;

const StyledH1 = styled(H1)`
  &&& {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    text-align: center;
    color: ${whiteColor};
    margin-top: -40px;
    &:before {
      content: open-quote;
      font-weight: bold;
      font-size: 5rem;
      margin-right: 15px;
      color: ${({ slideThemeColor }) => slideThemeColor};
    }
    &:after {
      content: close-quote;
      font-weight: 700;
      font-size: 5rem;
      margin-left: 15px;
      color: ${({ slideThemeColor }) => slideThemeColor};
    }
  }
`;

const Underscore = styled.div`
  width: 100px;
  height: 86x;
  border-radius: 12px;
  background-color: ${({ slideThemeColor }) => slideThemeColor};
  margin: -40px auto 30px;
`;

export default Slide;
