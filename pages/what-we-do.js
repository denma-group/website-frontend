// Libraries
import React, { useContext, useEffect } from 'react';
import styled, { withTheme } from 'styled-components';

// Components
import { Design, Develop, Deliver, Maintain, Hero } from 'src/components/WhatWeDo';
import { NavbarContext } from 'src/layout/UI/Navbar';

const WhatWeDo = withTheme(props => {
  const { theme } = props;

  const {
    resetCss: resetNavbarCss,
    colorState: [, setNavbarColor],
    backgroundColorState: [, setNavbarBgColor],
  } = useContext(NavbarContext);

  useEffect(() => {
    setNavbarBgColor(theme.whiteColor);
    setNavbarColor(theme.lightDarkColor);
    return () => {
      resetNavbarCss();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Hero />
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

export default WhatWeDo;
