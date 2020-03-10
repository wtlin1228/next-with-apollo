import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import withApollo from '../lib/graphql/apollo'

export const LAUNCH_TILE_DATA = gql`
  fragment LaunchTile on Launch {
    __typename
    id
    isBooked
    rocket {
      id
      name
    }
    mission {
      name
      missionPatch
    }
  }
`

export const GET_LAUNCHES = gql`
  query GetLaunchList($after: String) {
    launches(after: $after) {
      cursor
      hasMore
      launches {
        ...LaunchTile
      }
    }
  }
  ${LAUNCH_TILE_DATA}
`

const Home = () => {
  const { data, loading, error, fetchMore } = useQuery(GET_LAUNCHES)

  if (loading) return <div>Loading ...</div>
  if (error || !data) return <p>ERROR</p>

  // Debug
  console.log(data)

  return (
    <div className='container'>
      <h1>About Page</h1>
      {data.launches.cursor}
    </div>
  )
}

export default withApollo({ ssr: true })(Home)
