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
