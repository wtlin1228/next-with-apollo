import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { size } from 'polished'

// utils

// assets
import space from '../assets/images/space.jpg'
import SvgLogo from '../svgrs/logo-icon'
import SvgCurve from '../svgrs/curve-icon'
import SvgRocket from '../svgrs/rocket-icon'

// actions

// components
import Button from './button'

// self-defined-components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  padding-bottom: ${props => props.theme.unit * 6}px;
  color: white;
  background-color: ${props => props.theme.colors.primary};
  background-image: url(${space});
  background-size: cover;
  background-position: center;
`

const svgClassName = css`
  display: block;
  fill: currentColor;
`

const Header = styled.header`
  ${svgClassName}
  width: 100%;
  margin-bottom: ${props => props.theme.unit * 5}px;
  padding: ${props => props.theme.unit * 2.5}px;
  position: relative;
`

const StyledLogo = styled(SvgLogo)`
  ${size(56)}
  display: block;
  margin: 0 auto;
  position: relative;
`

const StyledCurve = styled(SvgCurve)`
  ${size('100%')}
  fill: ${props => props.theme.colors.primary};
  position: absolute;
  top: 0;
  left: 0;
`

const Heading = styled.h1`
  margin: ${props => props.theme.unit * 3}px ${props => props.theme.unit * 6}px;
`

const StyledRocket = styled(SvgRocket)`
  ${svgClassName}
  width: 250px;
`

const StyledForm = styled.form`
  width: 100%;
  max-width: 406px;
  padding: ${props => props.theme.unit * 3.5}px;
  border-radius: 3px;
  box-shadow: 6px 6px 1px rgba(0, 0, 0, 0.25);
  color: ${props => props.theme.colors.text};
  background-color: white;
`

const StyledInput = styled.input`
  width: 100%;
  margin-bottom: ${props => props.theme.unit * 2}px;
  padding: ${props => props.theme.unit * 1.25}px
    ${props => props.theme.unit * 2.5}px;
  border: 1px solid ${props => props.theme.colors.grey};
  font-size: 16px;
  outline: none;
  :focus {
    border-color: ${props => props.theme.colors.primary};
  }
`

export default class LoginForm extends Component {
  state = { email: '' }

  onChange = event => {
    const email = event.target.value
    this.setState(s => ({ email }))
  }

  onSubmit = event => {
    event.preventDefault()
    this.props.login({ variables: { email: this.state.email } })
  }

  render() {
    return (
      <Container>
        <Header>
          <StyledCurve />
          <StyledLogo />
        </Header>
        <StyledRocket />
        <Heading>Space Explorer</Heading>
        <StyledForm onSubmit={e => this.onSubmit(e)}>
          <StyledInput
            required
            type='email'
            name='email'
            placeholder='Email'
            data-testid='login-input'
            onChange={e => this.onChange(e)}
          />
          <Button type='submit'>Log in</Button>
        </StyledForm>
      </Container>
    )
  }
}
