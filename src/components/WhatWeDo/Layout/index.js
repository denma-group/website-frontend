// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import { H1, H2, H3, P } from 'src/components/UI/Text';
import FadeScaleIn from 'src/components/UI/FadeScaleIn/index';

const Layout = ({ data }) => {
  const { title, description, subtitle, steps, bannerText, color } = data;
  return (
    <Container>
      <Center>
        <Title color={color}>
          {title}
        </Title>
        <Description>
          {description}
        </Description>
        <div style={{ marginTop: 20 }}>
          <Subtitle>
            {subtitle}
          </Subtitle>
        </div>
        <ProcessContainer>
          {steps.map((step, i) => (
            <Process key={i.toString()} delay={0} time={0.15}>
              <Step color={color}>
                <H1 color="whiteColor">
                  {i + 1}
                </H1>
              </Step>
              <P align="center">{step.description}</P>
            </Process>
          ))}
        </ProcessContainer>
      </Center>
      <Banner color={color}>
        <H2 color="whiteColor">
          {bannerText}
        </H2>
      </Banner>
    </Container>
  );
};

const Title = styled(H1)`
  color: ${({ color }) => color};
`;

const Subtitle = styled(H2)`
  color: ${({ color }) => color};
  &&& {
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

const Description = styled(H3)`
  z-index: 100;
  margin-top: 40px;
  text-align: justify;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  @media (max-width: ${({ theme }) => theme.screenLg}) {
    width: 90%;
  }
`;

const ProcessContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 40px;
  box-sizing: border-box;
  @media (max-width: ${({ theme }) => theme.screenLg}) {
    justify-content: center;
  }
`;

const Process = styled(FadeScaleIn)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 150px;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @media (max-width: ${({ theme }) => theme.screenLg}) {
    width: 80%;
    margin: 20px 0;
  }
  &&& {
    z-index: 100;
    background-color: #fafafa;
  }
`;

const Step = styled.div`
  position: absolute;
  height: 50px;
  width: 50px;
  background-color: ${props => props.color};
  top: -30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Banner = styled.div`
  height: 100px;
  width: 100%;
  background-color: ${props => props.color};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
`;

Layout.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default Layout;
