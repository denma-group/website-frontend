// Libraries
import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';

// Components
import * as Text from 'src/components/UI/Text';
import Quality from 'src/components/SVG/Icons/Quality';
import Diagram from 'src/components/SVG/Icons/Diagram';
import Communities from 'src/components/SVG/Icons/Communities';
import FadeScaleIn from 'src/components/UI/FadeScaleIn/index';

const Mission = () => {
  const values = useMemo(
    () => [
      {
        title: 'Commit to quality.',
        description:
          'We believe that quality is an integral part of our work. From each small detail to endless lines of code, we want to bring out the best we’ve got.',
        icon: <Quality style={{ width: 150, height: 150 }} />,
        delay: 0.2,
      },
      {
        title: 'Learning & growth.',
        description:
          'It’s difficult to deliver quality if the door is closed for feedback. In our company headquarters, the teams rely on one another, always learning from their different disciplines. We also believe that individual training is key, so we support and encourage it.',
        icon: <Diagram style={{ width: 150, height: 150 }} />,
        delay: 0.4,
      },
      {
        title: 'Empowering community',
        description:
          'Denma’s core identity is to empower other visionaries. From the very beginning we’ve experienced that having the correct form of support is what propels us forward',
        icon: <Communities style={{ width: 150, height: 150 }} />,
        delay: 0.6,
      },
    ],
    []
  );

  return (
    <Container>
      <Text.H1
        css={css`
          color: ${({ theme }) => theme.brandDarkRed};
          padding-top: 100px;
        `}
      >
        Mission
      </Text.H1>
      <Text.H3
        css={css`
          padding-top: 50px;
          &&& {
            color: ${({ theme }) => theme.brandWhite};
            width: 80%;
            text-align: center;
          }
          @media (max-width: ${({ theme }) => theme.screenMd}) {
            &&& {
              margin: 50px 0;
              padding: 0;
              text-align: center;
            }
          }
        `}
      >
        survived not only five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </Text.H3>
      <Text.H1
        css={css`
          color: ${({ theme }) => theme.brandOrange};
          padding-top: 100px;
        `}
      >
        Values
      </Text.H1>
      {values.map((value, i) => (
        <ValuesContainer delay={value.delay} key={i.toString()} reverse={i % 2 === 1}>
          <TitleContainer>
            <Text.H2 style={{ paddingBottom: 10 }}>{value.title}</Text.H2>
            <Text.P
              css={css`
                color: white;
              `}
            >
              {value.description}
            </Text.P>
          </TitleContainer>
          <IconContainer>{value.icon}</IconContainer>
        </ValuesContainer>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.lightDarkColor};
`;

const ValuesContainer = styled(FadeScaleIn)`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  width: 70%;
  padding: 40px 0;
  @media (max-width: ${({ theme }) => theme.screenMd}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
  }
`;

const IconContainer = styled.div`
  @media (max-width: ${({ theme }) => theme.screenMd}) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 60%;
`;

export default Mission;
