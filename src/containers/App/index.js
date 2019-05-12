// Libraries
import React, { Suspense } from 'react';
import styled, { ThemeProvider, css } from 'styled-components';

// Styling
import 'styles/index.scss';
import { mainTheme } from 'styles';

// Components
import { Helmet } from 'react-helmet';
import LazyImport from 'components/UI/LazyImport';
import Loader from 'components/UI/Loader';
import LogoLoader from 'components/UI/LogoLoader';

const Wrapper = styled.main`
  display: flex;
  flex-flow: column;
  height: 100%;
`;

const loaderCss = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Loaders = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledLoader = styled(Loader)`
  ${loaderCss};
`;

const StyledLogoLoader = styled(LogoLoader)`
  ${loaderCss};
`;

const App = () => (
  <ThemeProvider theme={mainTheme}>
    <Wrapper>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Denma | Software Development Company
        </title>
      </Helmet>
      <Suspense 
        fallback={(
          <Loaders>
            <StyledLoader size={256} />
            <StyledLogoLoader />
          </Loaders>
        )}
      >
        <LazyImport importedComponent={import('containers/Routes')} />
      </Suspense>
    </Wrapper>
  </ThemeProvider>
);

export default App;
