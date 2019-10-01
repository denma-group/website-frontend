// Libraries
import React from 'react';
import styled, { withTheme } from 'styled-components';

// Components
import Layout from 'src/components/WhatWeDo/Layout';
import Brush from 'src/components/SVG/Icons/Brush';
import HookedParallax from 'src/components/UI/HookedParallax';

const Design = withTheme(props => {
  const data = {
    title: 'Design',
    description:
      'Functionality with dazzling visuals. Guaranteed. You talk directly with our lead designer, and then we create your venture’s visuals.',
    subtitle: 'This is how we create it',
    steps: [
      {
        title: '',
        description: ' Discussing your vision with our Design Team',
      },
      {
        title: '',
        description: ' Live Sketch of your future software solution',
      },
      {
        title: '',
        description: ' Adding that signature Denma touch',
      },
    ],
    bannerText: 'Where we shape your ideas.',
    color: props.theme.brandOrange,
    icons: [],
  };

  return (
    <Container>
      <Layout data={data} />
      <HookedParallax multiplierY={0.4} style={{ position: 'absolute', bottom: 400, right: 20 }}>
        <Brush fill={props.theme.brandOrange} style={{ height: 150, width: 150 }} />
      </HookedParallax>
    </Container>
  );
});

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  flex-direction: column;
`;

export default Design;
