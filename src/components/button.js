import styled from 'styled-components'
import { lighten } from 'polished'

// utils

// assets

// actions

// components

// self-defined-components

const height = 50
export default styled.button`
  display: block;
  min-width: 200px;
  height: ${height}px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.unit * 4}px;
  border: none;
  border-radius: ${height / 2}px;
  font-family: inherit;
  font-size: 18px;
  line-height: ${height}px;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
  background-color: ${props => props.theme.colors.accent};
  cursor: pointer;
  outline: none;
  :hover {
    background-color: ${props => lighten(0.1, props.theme.colors.accent)};
  }
  :active {
    background-color: ${props => lighten(0.2, props.theme.colors.accent)};
  }
`
