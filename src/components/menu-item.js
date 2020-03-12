import styled, { css } from 'styled-components'

// utils

// assets

// actions

// components

// self-defined-components

export const menuItemClassName = css`
  flex-grow: 1;
  width: 0;
  font-family: inherit;
  font-size: 20px;
  color: inherit;
  letter-spacing: 1.5;
  text-transform: uppercase;
  text-align: center;
  svg {
    display: block;
    width: 60px;
    margin: 0 auto ${props => props.theme.unit}px;
    fill: ${props => props.theme.colors.secondary};
  }
`

const MenuItem = styled.a`
  ${menuItemClassName}
  text-decoration: none;
`

export default MenuItem
