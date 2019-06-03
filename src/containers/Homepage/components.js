// Libraries
import styled from 'styled-components';

// Components
import Particles from 'react-particles-js';
import Typography from '@material-ui/core/Typography';
import PageWrapper from 'layout/UI/PageWrapper';
import Logo from 'components/SVG/Logos/DenmaHorizontal';

export const StyledPageWrapper = styled(PageWrapper)`
  color: ${props => props.theme.lightDarkColor};
  background-color: transparent;
`;

export const HeroWrapper = styled.div`
  position: relative;
  color: ${props => props.theme.whiteColor};
  width: 100%;
  height: ${1.25 * window.innerHeight}px;
  overflow: hidden;
  pointer-events: none;

  ${Particles} {
  }

  & > *:last-child {
    pointer-events: auto;
    height: 100%;
  }
`;

export const LogoContainer = styled.div`
  top: 0;
  left: 0;
  color: ${props => props.theme.whiteColor};
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  z-index: 5;

  ${props => props.css}

  .scroll-down {
    width: 80px;
    height: 80px;
    padding: 0 0 24px;
    cursor: pointer;
    pointer-events: auto;
  }
`;

export const StyledLogo = styled(Logo)`
  margin: 0 auto;
  width: 70%;
  height: 100%;
`;

export const StyledParticles = styled(Particles)`
  width: 100%;
  height: 100%;
  z-index: 0;
`;

export const StyledHeroValueProposition = styled(Typography)`
  &&& {
    font-size: 54px;
    line-height: 64px;
    span {
      font-size: 54px;
      line-height: 64px;
      font-weight: 500;
      color: ${props => props.theme.primary}
    }
  }
`;
