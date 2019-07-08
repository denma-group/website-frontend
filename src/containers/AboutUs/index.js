import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import Button from '@material-ui/core/Button';

import FounderCard from '../../components/UI/FounderCard';
import JoinUsImage from '../../static/images/backgrounds/join-us.jpg';
import HookedParallax from '../../components/UI/HookedParallax';

const AboutUs = (props) => {
  const foundersData = [
    {
      name: 'Jorge Baralt',
      age: '24',
      position: 'CEO',
      description:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a',
      color: props.theme.brandDarkRed
    },
    {
      name: 'Robert Molina',
      age: '25',
      position: 'CTO',
      description:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a',
      color: props.theme.brandOrange
    }
  ];

  return (
    <Container>
      <HeaderStyle>
        <HeaderContainer>
          <AppText color={props.theme.whiteColor} fontSize="42" fontWeight="bold">
            Devoted to provide{' '}
            <SpanText color={props.theme.brandOrange} fontSize="42" fontWeight="bold">
              professional advice
            </SpanText>
            , deliver amazing software, and take your company to the{' '}
            <SpanText color={props.theme.brandDarkRed} fontSize="42" fontWeight="bold">
              next level.
            </SpanText>
          </AppText>
          <GradientButton color1={props.theme.brandDarkRed} color2={props.theme.brandOrange}>
            Contact Us
          </GradientButton>
          <HookedParallax
            multiplierY={2}
            style={{
              marginTop: 20,
              position: 'absolute',
              bottom: -250,
              right: -250,
              zIndex: 10
            }}
          >
            <Circle size={500} color={props.theme.brandDarkRed} />
          </HookedParallax>
        </HeaderContainer>
      </HeaderStyle>
      <FounderContainer style={{ position: 'relative', zIndex: 9 }}>
        <AppText color={props.theme.brandOrange} fontSize="42" fontWeight="bold">
          Founder`s Story
        </AppText>
        <AppText
          color={props.theme.whiteColor}
          fontSize="24"
          fontWeight="200"
          style={{ marginTop: 20, paddingRight: 100, zIndex: 10 }}
        >
          Our partnership started a few years ago. Both of us had the same passion for coding and
          building our own company. We started simple, learning some basic stuff, and creating
          projects around it. As we got better, we started creating more interesting and complex
          projects. Until we realized, that we liked managing and working on multiple projects at
          the same time. Now, we have the ability to build projects from the ground up in really
          quick, smart, and efficient way.
        </AppText>
        <FoundersBioContainer>
          {foundersData.map((founder, i) => (
            <CardContainer style={{ zIndex: 10 }} key={i.toString()}>
              <FounderCard founder={founder} />
            </CardContainer>
          ))}
        </FoundersBioContainer>
        <HookedParallax style={{ position: 'absolute', bottom: -100 }} multiplierY={2}>
          <Square size={200} rotate={22} color={props.theme.brandDarkRed} />
        </HookedParallax>
        <HookedParallax
          style={{ position: 'absolute', bottom: -100, right: 100 }}
          multiplierY={1.5}
        >
          <Square size={100} rotate={44} color={props.theme.brandOrange} />
        </HookedParallax>
        <HookedParallax style={{ position: 'absolute', bottom: -50, right: 150 }} multiplierY={1.5}>
          <Square size={100} rotate={-22} color={props.theme.brandOrange} />
        </HookedParallax>
      </FounderContainer>
      <JoinUsContainer>
        <JoinUsTextContainer>
          <AppText color={props.theme.brandDarkRed} fontSize="42" fontWeight="bold">
            Want to join us?
          </AppText>
          <AppText color={props.theme.whiteColor} fontSize="32">
            Do not hesitate to contact us!
          </AppText>
          <AppText color={props.theme.whiteColor} fontSize="22">
            We are a small team that is always looking forward to grow. We are fun and very
            dedicated.
          </AppText>
        </JoinUsTextContainer>
      </JoinUsContainer>
      <OurProcessContainer />
    </Container>
  );
};

const Container = styled.div`
  color: ${props => props.theme.lightDarkColor};
  transition: all ease 200ms;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 74vh;
  width: 800px;
  margin-left: 120px;
  margin-top: 20vh;
  overflow: hidden;
`;

const HeaderStyle = styled.div`
  display: flex;
  background-color: ${props => props.backgroundColor || props.theme.lightDarkColor};
  color: ${props => props.theme.primary};
`;

const AppText = styled.p`
  font-size: ${props => `${props.fontSize}px`};
  color: ${props => props.color};
  font-weight: ${props => props.fontWeight};
  margin: 0;
`;

const SpanText = styled.span`
  font-size: ${props => `${props.fontSize}px`};
  color: ${props => props.color};
  font-weight: ${props => props.fontWeight};
`;

const GradientButton = styled(Button)`
  && {
    background: ${props => `linear-gradient(45deg, ${props.color1} 30%, ${props.color2} 200%);`};
    border-radius: 50px;
    border: 0;
    color: ${props => props.theme.brandWhite};
    height: 48px;
    font-weight: bold;
    width: 400px;
    margin-top: 20px;
  }
`;

const Circle = styled.div`
  height: ${props => `${props.size}px`};
  width: ${props => `${props.size}px`};
  border-radius: 50%;
  background-color: ${props => props.color};
  justify-content: center;
  align-items: center;
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
  height: 100vh;
  background-color: ${props => props.theme.lightDarkColor};
  display: flex;
  flex-direction: column;
  padding: 0 10%;
  justify-content: center;
`;

const FoundersBioContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: ${props => props.theme.whiteColor};
  margin-top: 20px;
`;

const CardContainer = styled.div`
  width: 50%;
  display: flex;
  align-content: center;
  justify-content: center;
`;

const JoinUsContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.9)), url(${JoinUsImage});
  height: 100vh;
  width: 100%;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: flex-end;
  z-index: 20;
`;

const JoinUsTextContainer = styled.div`
  position: relative;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 30%;
  margin-left: 240px;
  top: 240px;
  right: 100px;
  text-shadow: 1px 0px black;
`;

const OurProcessContainer = styled.div`
  background: ${props => `linear-gradient(rgba(0, 0, 0, 0.9),${props.theme.lightDarkColor});`};
  height: 100vh;
`;

AboutUs.propTypes = {
  theme: PropTypes.object.isRequired
};

export default withTheme(AboutUs);
