import gql from 'graphql-tag'

export const GET_CART_ITEMS = gql`
  query GetCartItems {
    cartItems @client
  }
`
