// Libraries
import React, { useRef } from 'react';
import styled, { withTheme } from 'styled-components';

// Components
import { Design, Develop, Deliver, Maintain } from 'src/components/WhatWeDo';

const WhatWeDo = withTheme(() => {
  return (
    <Container>
      <Design />
      <Develop />
      <Deliver />
      <Maintain />
    </Container>
  );
});

const Container = styled.div`
  display: flex;
  justify-content: center;
  color: ${props => props.theme.lightDarkColor};
  transition: all ease 200ms;
  background-color: ${({ theme }) => theme.whiteColor};
  flex-direction: column;
`;

const Content = styled.div``;

export default WhatWeDo;
