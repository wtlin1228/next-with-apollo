import React from 'react'
import styled from 'styled-components'
import { size } from 'polished'

// utils
const max = 25 // 25 letters in the alphabet
const offset = 97 // letter A's charcode is 97
const avatars = [dog1, dog2, dog3]
const maxIndex = avatars.length - 1

function pickAvatarByEmail(email) {
  const charCode = email.toLowerCase().charCodeAt(0) - offset
  const percentile = Math.max(0, Math.min(max, charCode)) / max
  return avatars[Math.round(maxIndex * percentile)]
}

// assets
import dog1 from '../assets/images/dog-1.png'
import dog2 from '../assets/images/dog-2.png'
import dog3 from '../assets/images/dog-3.png'

// actions

// components

// self-defined-components
const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${props => props.theme.unit * 4.5}px;
`

const Image = styled.img`
  ${size(134)}
  margin-right: ${props => props.theme.unit * 2.5}px;
  border-radius: ${props => (props.round ? '50%' : '0%')};

`

const Subheading = styled.h5`
  margin-top: ${props => props.theme.unit / 2}px;
  color: ${props => props.theme.colors.textSecondary};
`

const Header = ({ image, children = 'Space Explorer' }) => {
  // Be careful when you use web API
  // It will make SSR fail
  let email = 'server@gmail.com'
  if (typeof window != 'undefined') {
    email = atob(localStorage.getItem('token'))
  }

  const avatar = image || pickAvatarByEmail(email)

  return (
    <Container>
      <Image round={!image} src={avatar} alt='Space dog' />
      <div>
        <h2>{children}</h2>
        <Subheading>{email}</Subheading>
      </div>
    </Container>
  )
}

export default Header
