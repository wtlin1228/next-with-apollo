import React from 'react'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'

// utils
import { GET_LAUNCH } from './cart-item'

// assets

// actions
export const BOOK_TRIPS = gql`
  mutation BookTrips($launchIds: [ID]!) {
    bookTrips(launchIds: $launchIds) {
      success
      message
      launches {
        id
        isBooked
      }
    }
  }
`

// components
import Button from '../components/button'

// self-defined-components

const BookTrips = ({ cartItems }) => {
  const [bookTrips, { data }] = useMutation(BOOK_TRIPS, {
    variables: { launchIds: cartItems },
    refetchQueries: cartItems.map(launchId => ({
      query: GET_LAUNCH,
      variables: { launchId }
    })),
    update(cache) {
      cache.writeData({ data: { cartItems: [] } })
    }
  })

  return data && data.bookTrips && !data.bookTrips.success ? (
    <p data-testid="message">{data.bookTrips.message}</p>
  ) : (
    <Button onClick={() => bookTrips()} data-testid="book-button">
      Book All
    </Button>
  )
}

export default BookTrips
