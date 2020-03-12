import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from '@reach/router'

// utils
const backgrounds = [galaxy, iss, moon]
export function getBackgroundImage(id) {
  return `url(${backgrounds[Number(id) % backgrounds.length]})`
}

// assets
import galaxy from '../assets/images/galaxy.jpg'
import iss from '../assets/images/iss.jpg'
import moon from '../assets/images/moon.jpg'

// actions

// components

// self-defined-components
export const cardClassName = css`
  padding: ${props => props.theme.unit * 4}px ${props => props.theme.unit * 5}px;
  border-radius: 7px;
  color: white;
  background-size: cover;
  background-position: center;
`

const StyledLink = styled(Link)`
  ${cardClassName}
  display: block;
  height: 193px;
  margin-top: padding;
  text-decoration: none;
  :not(:last-child) {
    margin-bottom: ${props => props.theme.unit * 4}px;
  }
`

const LaunchTile = ({ launch }) => {
  const { id, mission, rocket } = launch
  return (
    <StyledLink
      to={`/launch/${id}`}
      style={{
        backgroundImage: getBackgroundImage(id)
      }}
    >
      <h3>{mission ? mission.name : ''}</h3>
      <h5>{rocket && rocket.name}</h5>
    </StyledLink>
  )
}

export default LaunchTile
