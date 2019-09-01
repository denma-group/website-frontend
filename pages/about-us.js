// Libraries
import React, { useRef } from 'react';
import styled, { withTheme } from 'styled-components';

// Components
import { Header, Founder, Mission } from 'src/components/AboutUs';

const AboutUs = withTheme(() => {
  const founderRef = useRef(null);

  return (
    <Container>
      <>
        <Header scrollRef={founderRef} />
        <Founder innerRef={founderRef} />
        <Mission />
      </>
    </Container>
  );
});

const Container = styled.div`
  color: ${props => props.theme.whiteColor};
  transition: all ease 200ms;
  min-height: 200vh;
  background-color: ${({ theme }) => theme.lightDarkColor};
`;

export default AboutUs;
