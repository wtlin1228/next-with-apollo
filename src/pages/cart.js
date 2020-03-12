import React, { Fragment } from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
// Todo: integrate RouteComponentProps into PropTypes
import { RouteComponentProps } from '@reach/router'

// utils
import withApollo from '../lib/graphql/apollo'

// assets

// actions
export const GET_CART_ITEMS = gql`
  query GetCartItems {
    cartItems @client
  }
`

// components
import { PageContainer, Header, Loading, Footer } from '../components'
import { CartItem, BookTrips } from '../containers'

// self-defined-components

const Cart = () => {
  const { data, loading, error } = useQuery(GET_CART_ITEMS)

  if (loading) return <Loading />
  if (error) return <p>ERROR: {error.message}</p>

  return (
    <Fragment>
      <PageContainer>
        <Header>My Cart</Header>
        {!data || (!!data && data.cartItems.length === 0) ? (
          <p data-testid='empty-message'>No items in your cart</p>
        ) : (
          <Fragment>
            {!!data &&
              data.cartItems.map(launchId => (
                <CartItem key={launchId} launchId={launchId} />
              ))}
            <BookTrips cartItems={!!data ? data.cartItems : []} />
          </Fragment>
        )}
      </PageContainer>
      <Footer />
    </Fragment>
  )
}

export default withApollo({ ssr: true })(Cart)
