// Libraries
import styled from 'styled-components';

// Components
// import Typography from '@material-ui/core/Typography';
import PageWrapper from 'src/layout/UI/PageWrapper';
import ResponsiveLogo from 'src/components/SVG/Logos/ResponsiveLogo';
import { H1 } from 'src/components/UI/Text';

export const StyledPageWrapper = styled(PageWrapper)`
  color: ${props => props.theme.lightDarkColor};
  background-color: transparent;
`;

export const HeroWrapper = styled.div`
  position: relative;
  color: ${props => props.theme.whiteColor};
  width: 100%;
  height: 125vh;
  overflow: hidden;
  pointer-events: none;
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

export const StyledLogo = styled(ResponsiveLogo)`
  margin: 0 auto 72px;
  width: 75%;

  @media (max-width: ${({ theme }) => theme.screenXl}) and (orientation: portrait) {
    margin: -120px auto 24px;
  }
`;

export const ValueProposition = styled(H1)`
  &&& {
    padding: 24px 0;
    width: 90%;
    margin: 0 auto;
    text-align: center;
    span {
      font-size: inherit;
      font-weight: 500;
      color: ${props => props.theme.primary}
    }
  }
`;
