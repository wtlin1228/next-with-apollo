import React, { Fragment } from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

// utils
import withApollo from '../lib/graphql/apollo'
import { LAUNCH_TILE_DATA } from './launches'

// assets

// actions
export const GET_MY_TRIPS = gql`
  query GetMyTrips {
    me {
      id
      email
      trips {
        ...LaunchTile
      }
    }
  }
  ${LAUNCH_TILE_DATA}
`

// components
import {
  PageContainer,
  Loading,
  Header,
  LaunchTile,
  Footer
} from '../components'

// self-defined-components

const Profile = () => {
  const { data, loading, error } = useQuery(GET_MY_TRIPS, {
    fetchPolicy: 'network-only'
  })
  if (loading) return <Loading />
  if (error) return <p>ERROR: {error.message}</p>
  if (data === undefined) return <p>ERROR</p>

  return (
    <Fragment>
      <PageContainer>
        <Header>My Trips</Header>
        {data.me && data.me.trips.length ? (
          data.me.trips.map(launch => (
            <LaunchTile key={launch.id} launch={launch} />
          ))
        ) : (
          <p>You haven't booked any trips</p>
        )}
      </PageContainer>
      <Footer />
    </Fragment>
  )
}

export default withApollo({ ssr: true })(Profile)
