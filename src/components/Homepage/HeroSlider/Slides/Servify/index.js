// Libraries
import React from 'react';
import styled from 'styled-components';

// Dependencies
import from 'static/images'

// Components
import { LazyImage } from 'components/UI';

const Servify = () => (
  <Wrapper>
    <ImageContainer>
      <LazyImage
        src={}
      />
    </ImageContainer>
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
`;

const InformationContainer = styled.div`
  flex: 1;
`;

const ImageContainer = styled.div`
  flex: 1;
`;
