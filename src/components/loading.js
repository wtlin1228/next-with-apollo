import styled, { keyframes } from 'styled-components'
import { size } from 'polished'

// utils

// assets
import SvgLogo from '../svgrs/logo-icon'

// actions

// components

// self-defined-components
const spin = keyframes`
  to {
    transform: rotate(360deg)
  }
`

const Loading = styled(SvgLogo)`
  ${size(64)}
  display: block;
  margin: auto;
  fill: ${props => props.theme.colors.grey};
  path {
    transform-origin: center;
    animation: ${spin} 1s linear infinite;
  }
`

export default Loading
