import React from 'react'
import styled from 'styled-components'
import { useApolloClient } from '@apollo/react-hooks'

// utils

// assets
import SvgExit from '../svgrs/exit-icon'

// actions

// components
import { menuItemClassName } from '../components/menu-item'

// self-defined-components
const StyledButton = styled.button`
  ${menuItemClassName}
  background: none;
  border: none;
  padding: 0;
`

const LogoutButton = () => {
  const client = useApolloClient()
  return (
    <StyledButton
      data-testid='logout-button'
      onClick={() => {
        client.writeData({ data: { isLoggedIn: false } })
        localStorage.clear()
      }}
    >
      <SvgExit />
      Logout
    </StyledButton>
  )
}

export default LogoutButton
