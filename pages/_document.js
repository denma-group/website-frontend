// Libraries
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet as StyledComponentsServerStyleSheet } from 'styled-components';
import { ServerStyleSheets as MuiServerStyleSheets } from '@material-ui/styles';

// Polyfills
import 'intersection-observer';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    // Render app and page and get the context of the page with collected side effects.
    const styledComponentSheet = new StyledComponentsServerStyleSheet();
    const materialUiSheets = new MuiServerStyleSheets();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => props => (
          materialUiSheets.collect(
            styledComponentSheet.collectStyles(<App {...props} />)
          )
        )
      });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {styledComponentSheet.getStyleElement()}
            {materialUiSheets.getStyleElement()}
          </>
        )
      };
    } finally {
      styledComponentSheet.seal();
    }
  }

  render() {
    return (
      <html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
