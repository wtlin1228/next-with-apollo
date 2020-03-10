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
