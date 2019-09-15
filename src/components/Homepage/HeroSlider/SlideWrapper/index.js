// Libraries
import React from 'react';
import styled from 'styled-components';

// Components
import { Slide } from 'hero-slider';

const SlideWrapper = styled(({ overlayColor, ...rest }) => <Slide {...rest} />)`
  .slide-wrapper {
    &, .slide-container {
      position: relative;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      background-color: ${({ overlayColor }) => overlayColor};
      z-index: 0;
      opacity: 0.66;
    }

    > * {
      z-index: 1;
    }
  }
`;

export default SlideWrapper;
