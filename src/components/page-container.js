import React, { Fragment } from 'react'
import styled from 'styled-components'

// utils

// assets

// actions

// components

// self-defined-components
const Bar = styled.div`
  flex-shrink: 0;
  height: 12px;
  background-color: ${props => props.theme.colors.primary};
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: ${props => props.theme.unit * 3}px;
  padding-bottom: ${props => props.theme.unit * 5}px;
`

export default function PageContainer(props) {
  return (
    <Fragment>
      <Bar />
      <Container>{props.children}</Container>
    </Fragment>
  )
}
