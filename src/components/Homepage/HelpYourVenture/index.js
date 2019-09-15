// Libraries
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Dependencies
import image from 'static/images/homepage/help_your_business.png';

// Components
import { Image } from 'src/components/UI';
import { H2, H3 } from 'src/components/UI/Text';
import { PopIn } from 'src/components/UI/Animations';
import {
  Row,
  Col,
} from 'src/components/Layout';

const HelpYourVenture = props => {
  const { totalScreenHeight } = props;
  return (
    <Wrapper
      height={totalScreenHeight}
      alignItems="center"
    >
      {/* PITCH */}
      <PopIn
        classNames="pitch"
        wrapper={Help}
        alignItems="center"
        sm={12}
        md={7}
      >
        <div>
          <StyledH2>
            We’re committed to improve your ventures
          </StyledH2>
          <StyledH3>
            We’ve experienced the <span>cumbersome</span> project management approach given by
            big firms. We decided to focus on <span>generating value</span> for your company,
            knowing that <span>responsiveness</span> is <span>key</span> for your project, and we’re
            here to tailor to <span>your</span> specific <span>needs</span>. Needless to say, you’re
            our team’s <span>priority</span>.
          </StyledH3>
        </div>
      </PopIn>
      {/* IMAGE */}
      <PopIn
        classNames="image"
        wrapper={ImageContainer}
        alignItems="center"
        sm={12}
        md={5}
        animationMultiplier={2}
      >
        <Image
          draggable={false}
          src={image}
        />
      </PopIn>
    </Wrapper>
  );
};

HelpYourVenture.propTypes = {
  totalScreenHeight: PropTypes.number,
};

HelpYourVenture.defaultProps = {
  totalScreenHeight: undefined,
};

// Wrapper
const Wrapper = styled(Row)`
  &&& {
    margin: 5% auto 10%;
    max-width: 1200px;
  }
`;

const Help = styled(Col)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding: 0 5%;
`;

const ImageContainer = styled(Col)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 95%;
    margin: 30px auto 0px;
    max-height: 100%;
    max-width: 620px;
  }
`;

const StyledH2 = styled(H2)`
  &&& {
    margin-bottom: 1em;
    line-height: 1.5;
    font-weight: 700;
    color: ${props => props.theme.primary};
    text-align: center;
    font-size: 44px;

    @media (max-width: ${({ theme }) => theme.screenMd}) {
      font-size: 36px;
    }

    @media (max-width: ${({ theme }) => theme.screenSm}) {
      font-size: 28px;
    }

    @media (max-width: ${({ theme }) => theme.screenXs}) {
      font-size: 20px;
    }
  }
`;

const StyledH3 = styled(H3)`
  &&& {
    text-align: center;
    span {
      color: ${props => props.theme.primary};
      font-weight: 400;
    }
  }
`;

export default HelpYourVenture;
