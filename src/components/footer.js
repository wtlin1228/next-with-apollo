import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

// utils

// assets
import SvgHome from '../svgrs/home-icon'
import SvgCart from '../svgrs/cart-icon'
import SvgProfile from '../svgrs/profile-icon'

// actions

// components
import MenuItem from './menu-item'
import LogoutButton from '../containers/logout-button'

// self-defined-components
const Container = styled.footer`
  flex-shrink: 0;
  margin-top: auto;
  background-color: white;
  color: ${props => props.theme.colors.textSecondary};
  position: sticky;
  bottom: 0;
`

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 460px;
  padding: ${props => props.theme.unit * 2.5}px;
  margin: 0 auto;
`

export default function Footer() {
  return (
    <Container>
      <InnerContainer>
        <Link href='/launches'>
          <MenuItem>
            <SvgHome />
            Home
          </MenuItem>
        </Link>
        <Link href='/cart'>
          <MenuItem>
            <SvgCart />
            Cart
          </MenuItem>
        </Link>
        <Link href='/profile'>
          <MenuItem>
            <SvgProfile />
            Profile
          </MenuItem>
        </Link>
        <LogoutButton />
      </InnerContainer>
    </Container>
  )
}
