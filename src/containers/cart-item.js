import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

// utils
import { LAUNCH_TILE_DATA } from '../pages/launches'

// assets

// actions
export const GET_LAUNCH = gql`
  query GetLaunch($launchId: ID!) {
    launch(id: $launchId) {
      ...LaunchTile
    }
  }
  ${LAUNCH_TILE_DATA}
`

// components
import LaunchTile from '../components/launch-tile'

// self-defined-components

const CartItem = ({ launchId }) => {
  const { data, loading, error } = useQuery(GET_LAUNCH, {
    variables: { launchId }
  })
  if (loading) return <p>Loading...</p>
  if (error) return <p>ERROR: {error.message}</p>
  if (!data) return <p>Not found</p>
  return data.launch && <LaunchTile launch={data.launch} />
}

export default CartItem
