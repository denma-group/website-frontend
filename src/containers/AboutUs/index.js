import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { StylesProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const AboutUs = props => {
  console.log(props);
  return (
    <Container>
      <HeaderStyle>
        <HeaderContainer>
          <HeaderText>
            Devoted to provide{' '}
            <HeaderSpan color={props.theme.brandOrange}>professional advice</HeaderSpan>, deliver
            amazing software, and{' '}
            <HeaderSpan color={props.theme.brandDarkRed}>
              take your company to the next level.
            </HeaderSpan>
          </HeaderText>
          <GradientButton color1={props.theme.brandDarkRed} color2={props.theme.brandOrange}>
            Contact Us
          </GradientButton>
        </HeaderContainer>
      </HeaderStyle>
    </Container>
  );
};

const Container = styled.div`
  color: ${props => props.theme.lightDarkColor};
  transition: all ease 200ms;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 74vh;
  width: 60%;
  margin-left: 120px;
  margin-top: 20vh;
`;

const HeaderStyle = styled.div`
  display: flex;
  background-color: ${props => props.backgroundColor || props.theme.lightDarkColor};
  color: ${props => props.theme.primary};
`;

const HeaderText = styled.h1`
  font-size: 48px;
  color: ${props => props.theme.whiteColor};
  font-weight: bold;
`;

const HeaderSpan = styled.span`
  font-size: 48px;
  color: ${props => props.color};
  font-weight: bold;
`;

const GradientButton = styled(Button)`
  && {
    background: ${props => `linear-gradient(45deg, ${props.color1} 30%, ${props.color2} 200%);`};
    border-radius: 50px;
    border: 0;
    color: ${props => props.theme.brandWhite};
    height: 48px;
    font-weight: bold;
    width: 50%;
  }
`;

AboutUs.propTypes = {
  theme: PropTypes.object.isRequired
};

export default withTheme(AboutUs);
