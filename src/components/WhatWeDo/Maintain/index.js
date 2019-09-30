import React, { useMemo } from 'react';
import Layout from 'src/components/WhatWeDo/Layout';
import styled, { withTheme } from 'styled-components';
import Maintain from 'src/components/SVG/Icons/Maintain';
import HookedParallax from 'src/components/UI/HookedParallax';

const Develop = withTheme(props => {
  const data = {
      title: 'Maintain',
      description:
        'After handing you the final version of your product, you can count on us to keep it in top form. If you have an existing digital product and wish to update or maintain it, Denma is the choice for you.',
      subtitle: 'How we keep your project up to date',
      steps: [
        {
          title: '',
          description:
            ' Thorough analysis of your current product',
        },
        {
          title: '',
          description:
            ' Optimizing your product’s functionality',
        },
        {
          title: '',
          description:
            ' Fresh and functional comeback of your software',
        },
      ],
      bannerText: 'Keeping your product up to date.',
      color: props.theme.greenColor,
      icons: [],
    };
  return (
    <Container>
      <Layout data={data} />
      <HookedParallax multiplierY={0.4} style={{ position: 'absolute', bottom: 350, left: 20, marginBottom: 50 }}>
        <Maintain fill={props.theme.greenColor} style={{ height: 150, width: 150 }} />
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
