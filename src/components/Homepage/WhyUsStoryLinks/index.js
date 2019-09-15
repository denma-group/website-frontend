// Libraries
import React from 'react';
import styled from 'styled-components';

// Components
import {
  Col,
} from 'src/components/Layout';
import { Fab } from 'src/components/UI';
import { H1, H2 } from 'src/components/UI/Text';

const WhyUsStoryLinks = () => (
  <>
    {[
      {
        key: 'team',
        title: 'The Team',
        subtitle: 'Discover the faces behind Denma. They will guide you through the process.',
        fab: 'Our Team'
      },
      {
        key: 'story',
        title: 'Our Story',
        subtitle: 'After experiencing large consultancies, Denma came to make a difference.',
        fab: 'Read More',
      }
    ].map(({ key, title, subtitle, fab }) => (
      <Wrapper sm={6} xs={12} key={key}>
        <Container>
          <StyledH1>
            {title}
          </StyledH1>
          <StyledH2>
            {subtitle}
          </StyledH2>
          <br />
          <Fab
            variant="extended"
            color="whiteColor"
            backgroundColor="primary"
            style={{
              minWidth: 150
            }}
          >
            {fab}
          </Fab>
        </Container>
      </Wrapper>
    ))}
  </>
);

const Wrapper = styled(Col)`
  width: 80%;
  max-width: 600px;
  min-height: 50vh;
  background-color: #f0f0f0;
`;

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: 80%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px 0;
`;

const StyledH2 = styled(H2)`
  &&& {
    display: flex;
    align-items: center;
    color: inherit;
    text-align: center;
    margin: 0 auto;
    min-height: 60px;
  }
`;

const StyledH1 = styled(H1)`
  &&& {
    color: ${({ theme }) => theme.lightDarkColor};
    font-weight: 700;
    text-align: center;
  }
`;

export default WhyUsStoryLinks;
