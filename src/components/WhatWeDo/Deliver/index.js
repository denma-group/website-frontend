import React, { useMemo } from 'react';
import Layout from 'src/components/WhatWeDo/Layout';
import styled, { withTheme } from 'styled-components';
import Deliver from 'src/components/SVG/Icons/Deliver';
import HookedParallax from 'src/components/UI/HookedParallax';

const Design = withTheme(props => {
  const data = {
    title: 'Deliver',
    description:
      'We work with development sprints and strive to have working software brought to you as soon as possible. A feedback session with you is paramount to fine-tune your product. ',
    subtitle: 'Making sure everything is ready',
    steps: [
      {
        title: '',
        description:
          ' We deliver you a Beta version in record time',
      },
      {
        title: '',
        description:
          ' Feedback session with you and your partners',
      },
      {
        title: '',
        description:
          ' Polishing final product and launching your product',
      },
    ],
    bannerText: 'Your dream has become a reality.',
    color: props.theme.blueColor,
    icons: [],
  };

  return (
    <Container>
      <Layout data={data} />
      <HookedParallax multiplierY={0.4} style={{ position: 'absolute', top: 400, right: 20 }}>
        <Deliver fill={props.theme.blueColor} style={{ height: 150, width: 150 }} />
      </HookedParallax>
    </Container>
  );
});

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
`;

export default withTheme(Design);
