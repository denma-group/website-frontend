// Libraries
import React from 'react';
import styled, { withTheme } from 'styled-components';

// Components
import Layout from 'src/components/WhatWeDo/Layout';
import Rocket from 'src/components/SVG/Icons/Rocket';
import HookedParallax from 'src/components/UI/HookedParallax';

const Develop = withTheme(props => {
  const data = {
    title: 'Develop',
    description:
      'Our development team works at the edge of industry standards, always pushing for the best functionality. You are key in the development process, as you define what we create for you. Does your digital product require Maps integration? Seamless duality between web and mobile, website and app? That’s our specialty. And you, are our priority.',
    subtitle: 'Our developing process looks like this',
    steps: [
      {
        title: '',
        description:
          ' Developing your product’s digital architecture',
      },
      {
        title: '',
        description:
          ' Testing functionality and improving performance',
      },
      {
        title: '',
        description:
          ' Waterproofing your backend and preparing final launch',
      },
    ],
    bannerText: 'Bringing designs to life',
    color: props.theme.brandRed,
    icons: [],
  };

  return (
    <Container>
      <Layout data={data} />
      <HookedParallax multiplierY={0.4} style={{ position: 'absolute', bottom: 400, left: 20 }}>
        <Rocket fill={props.theme.brandRed} style={{ height: 150, width: 150 }} />
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

export default Develop;
