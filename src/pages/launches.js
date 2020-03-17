import React, { Fragment } from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

// utils
import withApollo from '../lib/graphql/apollo'

// assets

// actions
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

// components
import {
  PageContainer,
  LaunchTile,
  Header,
  Button,
  Loading,
  Footer
} from '../components'

// self-defined-components

const Launches = () => {
  const { data, loading, error, fetchMore, refetch, networkStatus } = useQuery(
    GET_LAUNCHES,
    {
      notifyOnNetworkStatusChange: true,
      onCompleted: data => {
        console.log(data)
      }
    }
  )

  // checkout the network status:
  // https://github.com/apollographql/apollo-client/blob/master/src/core/networkStatus.ts
  if (networkStatus === 4)
    return (
      <Fragment>
        <PageContainer>
          <Header />
          <Loading />
        </PageContainer>
      </Fragment>
    )

  if (loading) return <Loading />
  if (error || !data) return <p>ERROR</p>

  return (
    <Fragment>
      <PageContainer>
        <Header />
        <div style={{ marginBottom: 20 }}>
          <Button onClick={() => refetch()}>Refetch!</Button>
        </div>
        {data.launches &&
          data.launches.launches &&
          data.launches.launches.map(launch => (
            <LaunchTile key={launch.id} launch={launch} />
          ))}
        {data.launches && data.launches.hasMore && (
          <Button
            onClick={() =>
              fetchMore({
                variables: {
                  after: data.launches.cursor
                },
                updateQuery: (prev, { fetchMoreResult, ...rest }) => {
                  if (!fetchMoreResult) return prev
                  return {
                    ...fetchMoreResult,
                    launches: {
                      ...fetchMoreResult.launches,
                      launches: [
                        ...prev.launches.launches,
                        ...fetchMoreResult.launches.launches
                      ]
                    }
                  }
                }
              })
            }
          >
            Load More
          </Button>
        )}
      </PageContainer>
      <Footer />
    </Fragment>
  )
}

export default withApollo({ ssr: true })(Launches)
