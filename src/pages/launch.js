import React, { Fragment } from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
// Todo: integrate RouteComponentProps into PropTypes
import { RouteComponentProps } from '@reach/router'

// utils
import withApollo from '../lib/graphql/apollo'
import { LAUNCH_TILE_DATA } from './launches'

// assets

// actions
export const GET_LAUNCH_DETAILS = gql`
  query LaunchDetails($launchId: ID!) {
    launch(id: $launchId) {
      isInCart @client
      site
      rocket {
        type
      }
      ...LaunchTile
    }
  }
  ${LAUNCH_TILE_DATA}
`

// components
import {
  PageContainer,
  Loading,
  Header,
  LaunchDetail,
  Footer
} from '../components'
import { ActionButton } from '../containers'

// self-defined-components

const Launch = ({ launchId }) => {
  const { data, loading, error } = useQuery(GET_LAUNCH_DETAILS, {
    variables: { launchId }
  })

  if (loading) return <Loading />
  if (error) return <p>ERROR: {error.message}</p>
  if (!data) return <p>Not found</p>

  return (
    <Fragment>
      <PageContainer>
        <Header
          image={
            data.launch &&
            data.launch.mission &&
            data.launch.mission.missionPatch
          }
        >
          {data &&
            data.launch &&
            data.launch.mission &&
            data.launch.mission.name}
        </Header>
        <LaunchDetail {...data.launch} />
        <ActionButton {...data.launch} />
      </PageContainer>
      <Footer />
    </Fragment>
  )
}

export default withApollo({ ssr: true })(Launch)
