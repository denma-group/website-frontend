// Libraries
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme, css } from 'styled-components';

// Components
import HookedParallax from 'src/components/UI/HookedParallax';
import FadeScaleIn from 'src/components/UI/FadeScaleIn';
import FounderCard from 'src/components/AboutUs/Founders/FounderCard';
import * as Text from 'src/components/UI/Text';

export const Founders = props => {
  const foundersData = useMemo(
    () => [
      {
        name: 'Jorge Baralt',
        age: '24',
        position: 'CEO',
        description:
          'With endless energy and good humour, Jorge’s vision keeps us pushing forward.',
        color: props.theme.brandDarkRed,
        delay: 0,
      },
      {
        name: 'Robert Molina',
        age: '25',
        position: 'CTO',
        description:
          'Geek on the surface, developer to the core, Robert is always up to date with the latest tech trends.',
        color: props.theme.brandOrange,
        delay: 0.25,
      },
      {
        name: 'Diego Valdivia',
        age: '24',
        position: 'COO',
        description:
          'With a tendency to use his guitar more than advised, Diego maintains operations on time.',
        color: props.theme.brandDarkRed,
        delay: 0.5,
      },
      {
        name: 'Valeria Mascia',
        age: '25',
        position: 'CMO',
        description:
          'As prime responsible for our signature Denma look, Valeria puts our ideas on canvas.',
        color: props.theme.brandOrange,
        delay: 0.75,
      },
    ],
    [props.theme.brandDarkRed, props.theme.brandOrange]
  );
  return (
    <FounderContainer ref={props.innerRef} style={{ position: 'relative', zIndex: 0 }}>
      <div ref={props.innerRef}>
        <Text.H1
          css={css`
            color: ${props.theme.brandOrange};
          `}
        >
          Founder's Story
        </Text.H1>
      </div>

      <Text.H3
        css={css`
          &&& {
            color: ${props.theme.whiteColor};
            z-index: 11;
            margin-top: 20px;
            text-align: justify;
            line-height: 30px;
          }
        `}
      >
        Denma’s founders have been in the software business since 2014. With experience in large
        technology consultancies, we decided to create a more personalized way to work with clients.
        We focus on user experience to create compelling apps and websites. To do this, we have
        gathered a select team with experts on product design, development, and strategy. These
        teams will help validate and support your ideas. Denma focuses on high end products, with a
        passion to empower other visionaries. We believe that big ideas deserve proper solutions.
        And we’re here to follow through.
      </Text.H3>
      <FoundersBioContainer>
        {foundersData.map((founder, i) => (
          <CardContainer key={i.toString()}>
            <FadeScaleIn
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              delay={founder.delay}
              time={0.5}
            >
              <FounderCard founder={founder} />
            </FadeScaleIn>
          </CardContainer>
        ))}
      </FoundersBioContainer>
      <HookedParallax style={{ position: 'absolute', bottom: -100 }} multiplierY={0.8}>
        <Square size={200} rotate={22} color={props.theme.brandDarkRed} />
      </HookedParallax>
      <HookedParallax style={{ position: 'absolute', bottom: -100, right: 100 }} multiplierY={0.3}>
        <Square size={100} rotate={44} color={props.theme.brandOrange} />
      </HookedParallax>
      <HookedParallax style={{ position: 'absolute', bottom: -50, right: 150 }} multiplierY={0.4}>
        <Square size={100} rotate={-22} color={props.theme.brandOrange} />
      </HookedParallax>
    </FounderContainer>
  );
};

const CardContainer = styled.div`
  width: 50%;
  @media (max-width: ${({ theme }) => theme.screenMd}) {
    width: 100%;
  }
  display: flex;
  align-content: center;
  justify-content: center;
  z-index: 10;
  margin-top: 10px;
`;

const Square = styled.div`
  height: ${props => `${props.size}px`};
  width: ${props => `${props.size}px`};
  border-radius: 30px;
  transform: ${props => `rotateY(0deg) rotate(${props.rotate}deg)`};
  background-color: ${props => props.color};
  opacity: 0.7;
`;

const FounderContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: ${props => props.theme.lightDarkColor};
  display: flex;
  flex-direction: column;
  padding: 0 10%;
  justify-content: center;
  position: relative;
`;

const FoundersBioContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: ${props => props.theme.whiteColor};
  margin-top: 20px;
`;

Founders.propTypes = {
  theme: PropTypes.instanceOf(Object).isRequired,
  innerRef: PropTypes.instanceOf(Object).isRequired,
};

export default withTheme(Founders);
