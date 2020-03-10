# Styles

## Third Party

### CSS in JS - styled-components

Library: 

+ [styled-components](https://github.com/styled-components/styled-components)

Configuration:

`yarn add babel-plugin-styled-components --dev`

```json
// babelrc
{
  "presets": [
    "next/babel"
  ],
  "plugins": [
    [
      "styled-components",
      {
        "ssr": true,
        "displayName": true,
        "preprocess": false
      }
    ]
  ]
}

```

``` javaScript
// ./src/pages/_document.js

/**
 * Server Side Rendering for styled-components
 */

import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }
}
```

Usage:

+ Declare global styles

  Put `css reset` here

  ```javaScript
  import { createGlobalStyle } from 'styled-components'

  const GlobalStyle = createGlobalStyle`
    html,
    body {
      height: 100%;
    }
    body {
      margin: 0;
      padding: 0;
      font-family: Source Sans Pro, sans-serif;
      background-color: ${props => props.theme.colors.background};
      color: ${props => props.theme.colors.text};
    }
    #root {
      display: flex;
      flex-direction: column;
      min-height: 100%;
    }
    * {
      box-sizing: border-box;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0;
      font-weight: 600;
    }
    h1 {
      font-size: 48px;
      line-height: 1;
    }
    h2 {
      font-size: 40px;
    }
    h3 {
      font-size: 36px;
    }
    h5 {
      font-size: 16px;
      text-transform: uppercase;
      letter-spacing: 4;
    }
  `

  export default GlobalStyle

  ```

+ Declare global theme
  
  Put `media queries`, `colors`, `units` ... here
  
  ```javaScript
  const colors = {
    primary: '#220a82',
    secondary: '#14cbc4',
    accent: '#e535ab',
    background: '#f7f8fa',
    grey: '#d8d9e0',
    text: '#343c5a',
    textSecondary: '#747790'
  }

  const theme = {
    unit: 8,
    colors
  }

  export default theme

  ```

+ Add global style and theme into our app

  ```javaScript
  // ./src/pages/_app.js

  /**
   * Next.js uses the App component to initialize pages.
   * You can override it and control the page initialization.
   * Which allows you to do amazing things like:
   *
   * - Persisting layout between page changes
   * - Keeping state when navigating pages
   * - Custom error handling using componentDidCatch
   * - Inject additional data into pages
   * - Add global CSS
   *
   */

  import App from 'next/app'
  import React from 'react'
  import Head from 'next/head'
  import { ThemeProvider } from 'styled-components'
  import theme from '../styles/theme'
  import GlobalStyle from '../styles/global'

  export default class MyApp extends App {
    render() {
      const { Component, pageProps } = this.props
      return (
        <ThemeProvider theme={theme}>
          <Head>
            <title>Next Graphql Demo</title>
          </Head>
          <Component {...pageProps} />
          <GlobalStyle />
        </ThemeProvider>
      )
    }
  }

  ```

Resources:

+ https://github.com/zeit/next.js/tree/master/examples/with-styled-components

### A lightweight toolset - published

Library: 

+ [published](https://github.com/styled-components/polished)