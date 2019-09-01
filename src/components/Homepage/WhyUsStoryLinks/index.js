// Libraries
import React from 'react';
import styled from 'styled-components';

// Components
import {
  Col,
} from 'src/components/Layout';
import { Fab } from 'src/components/UI';
import { H1, Subtitle } from 'src/components/UI/Text';

const WhyUsStoryLinks = () => {
  return (
    <React.Fragment>
      {[
        {
          key: 'team',
          title: 'The Team',
          subtitle: 'Proin a neque sed ligula tincidunt sagittis. Praesent auctor luctus turpis, ut gravida nibh varius ut. Proin bibendum nibh dui, vel fermentum velit viverra et. Aliquam vitae finibus elit.',
          fab: 'Past Experiences',
        },
        {
          key: 'story',
          title: 'Our Story',
          subtitle: 'Proin a neque sed ligula tincidunt sagittis. Praesent auctor luctus turpis, ut gravida nibh varius ut. Proin bibendum nibh dui, vel fermentum velit viverra et. Aliquam vitae finibus elit.',
          fab: 'Continue Reading',
        }
      ].map(({ key, title, subtitle, fab }) => (
        <Wrapper sm={6} xs={12} key={key}>
          <Container>
            <StyledH1>
              {title}
            </StyledH1>
            <StyledSubtitle>
              {subtitle}
            </StyledSubtitle>
            <Fab
              variant="extended"
              color="primary"
            >
              {fab}
            </Fab>
          </Container>
        </Wrapper>
      ))}
    </React.Fragment>
  );
};

const Wrapper = styled(Col)`
  width: 80%;
  max-width: 600px;
  min-height: 70vh;
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

const StyledSubtitle = styled(Subtitle)`
  &&& {
    color: inherit;
    text-align: center;
    margin: 34px 0;
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
