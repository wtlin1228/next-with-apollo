import React from 'react'
import styled from 'styled-components'

// utils
import { cardClassName, getBackgroundImage } from './launch-tile'

// assets

// actions

// components

// self-defined-components
const Card = styled.div`
  ${cardClassName}
  height: 365px;
  margin-bottom: ${props => props.theme.unit * 4}px;
`

const LaunchDetail = ({ id, site, rocket }) => (
  <Card
    style={{
      backgroundImage: getBackgroundImage(id)
    }}
  >
    <h3>
      {rocket && rocket.name} ({rocket && rocket.type})
    </h3>
    <h5>{site}</h5>
  </Card>
)

export default LaunchDetail
