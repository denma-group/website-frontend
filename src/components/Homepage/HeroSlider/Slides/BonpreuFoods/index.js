// Libraries
import React from 'react';
import styled from 'styled-components';

// Dependencies
import mockup from 'static/images/hero_slider/bonpreu_foods/mockup_no_bg.png';

// Components
import { LazyImage } from 'components/UI';
import Typography from '@material-ui/core/Typography';

const Servify = () => (
  <Wrapper>
    <InformationContainer>
      <Typography variant="h2">Bonpreu Foods</Typography>
      <Typography variant="body1">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Typography>
    </InformationContainer>
    <ImageContainer>
      <LazyImage
        draggable="false"
        src={mockup}
      />
    </ImageContainer>
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: ${({ theme }) => theme.screenMd}) {
    flex-flow: column;
    > div {
      order: initial;
      padding: 15px 20px;

      h2 {
        font-size: 2.75rem;
      }
    }

    div:first-of-type {
      flex: 1.1;
    }

    div:nth-of-type(2) {
      flex: 1;
      align-items: flex-start;
    }
  }

  @media (max-height: ${({ theme }) => theme.screenSm}) {
    > div {
      padding: 15px 20px;

      h2 {
        font-size: 1.5em;
      }

      p {
        font-size: 1.25em;
      }
    }
  }
`;

const InformationContainer = styled.div`
  flex: 1.25;
  padding: 24px 120px  0 60px;
  color: ${({ theme }) => theme.whiteColor};
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  order: 2;

  h2 {
    margin-bottom: 20px;
    font-weight: bold;
    text-align: center;
  }

  p {
    margin-top: 4px;
    font-size: 24px;
    text-decoration: none;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  flex: 2;
  padding: 0 0 0 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Servify;
