import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import * as Text from 'src/components/UI/Text/index';
import FadeScaleIn from 'src/components/UI/FadeScaleIn/index';

const Layout = ({ data }) => {
  const { title, description, subtitle, steps, bannerText, color } = data;
  return (
    <Container>
      <Center>
        <Text.H1
          css={css`
            color: ${color};
          `}
        >
          {title}
        </Text.H1>
        <Text.H3
          css={css`
            &&& {
              margin-top: 40px;
              text-align: justify;
            }
          `}
        >
          {description}
        </Text.H3>
        <div style={{ marginTop: 20 }}>
          <Text.H2
            css={css`
              color: ${color};
              &&& {
                margin-top: 30px;
                margin-bottom: 30px;
              }
            `}
          >
            {subtitle}
          </Text.H2>
        </div>
        <ProcessContainer>
          {steps.map((step, i) => (
            <Process key={i.toString()} delay={0} time={0.15}>
              <Step color={color}>
                <Text.H1
                  css={css`
                    &&& {
                      color: ${({ theme }) => theme.whiteColor};
                    }
                  `}
                >
                  {i + 1}
                </Text.H1>
              </Step>

              <Text.P>{step.description}</Text.P>
            </Process>
          ))}
        </ProcessContainer>
      </Center>
      <Banner color={color}>
        <Text.H2
          css={css`
            color: ${({ theme }) => theme.whiteColor};
          `}
        >
          {bannerText}
        </Text.H2>
      </Banner>
    </Container>
  );
};

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
