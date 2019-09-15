// Libraries
import React from 'react';
import styled from 'styled-components';

// Components
import { Fab } from 'src/components/UI';
import { H1, H2 } from 'src/components/UI/Text';
import SubmitIcon from '@material-ui/icons/Send';

const ContactUs = () => (
  <Container>
    <H1
      align="center"
    >
      <div>Let’s get in touch!</div>
    </H1>
    <br />
    <H2
      align="center"
    >
      <div> We’d like to make something awesome together.</div>
    </H2>
    <br />
    <StyledFab
      variant="extended"
      aria-label="Submit"
      color="primary"
    >
      <SubmitIcon />
      <span className="text">Contact Us</span>
    </StyledFab>
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  width: 95%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.screenLg};
  padding: 48px 12px;
`;

const StyledFab = styled(Fab)`
  &&& {
    .MuiFab-label {
      display: flex;
      align-items: center;
    }
    @media (max-width: ${({ theme }) => theme.screenLg}) {
      flex: 1;
      margin-left: 0;
      padding: 12px 16px;
    }
    .text {
      margin-left: 0.4185em;
      font-weight: 700;
      font-size: 19px;
    }
  }
`;

export default ContactUs;
