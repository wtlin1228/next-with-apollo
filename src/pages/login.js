import React from 'react'
import Router from 'next/router'
import { useApolloClient, useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'

// utils
import withApollo from '../lib/graphql/apollo'

// assets

// actions
export const LOGIN_USER = gql`
  mutation login($email: String!) {
    login(email: $email)
  }
`

// components
import { LoginForm, Loading } from '../components'

// self-defined-components

function Login() {
  const client = useApolloClient()
  const [login, { loading, error }] = useMutation(LOGIN_USER, {
    onCompleted({ login }) {
      localStorage.setItem('token', login)
      client.writeData({ data: { isLoggedIn: true } })
      Router.push('/launches')
    }
  })

  if (loading) return <Loading />
  if (error) return <p>An error occurred</p>

  return <LoginForm login={login} />
}

export default withApollo({ ssr: true })(Login)
