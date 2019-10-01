// Libraries
import React from 'react';
import styled from 'styled-components';

// Components
import * as Text from 'src/components/UI/Text/index';

export default function Hero() {
  return (
    <Container>
      <Text.H1 align="center">Designed so you are involved in every phase</Text.H1>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  @media (max-width: ${({ theme }) => theme.screenMd}) {
    padding: 0px 100px;
  }
`;
