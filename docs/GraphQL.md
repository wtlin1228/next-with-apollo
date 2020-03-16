# GraphQL

## Third Party

### Apollo GraphQL

Put the logics in the `./src/lib/graphql`

Libraries: 

+ [apollo-client](https://github.com/apollographql/apollo-client)
+ [apollo-link-http](https://www.apollographql.com/docs/link/links/http/)
+ [apollo-cache-inmemory](https://www.apollographql.com/docs/react/caching/cache-configuration/)
+ [@apollo/react-ssr](https://www.apollographql.com/docs/react/performance/server-side-rendering/)
+ [@apollo/react-hooks](https://www.apollographql.com/docs/react/api/react-hooks/)
+ [graphql-tag](https://github.com/apollographql/graphql-tag)

Usage:

+ `withApollo`

  ```javaScript
  import React from 'react'
  import { useQuery } from '@apollo/react-hooks'
  import gql from 'graphql-tag'
  import withApollo from '../lib/graphql/apollo'

  export const MY_FIRST_QUERY = gql`
    query GetMyFirstQuery() {
      me {
        name
        phone
      }
    }
  `

  const MyPage = () => {
    const { data, loading, error } = useQuery(MY_FIRST_QUERY)

    if (loading) return <div>Loading ...</div>
    if (error || !data) return <p>ERROR</p>

    return (
      <div className='container'>
        {data.me.name}
        {data.me.phone}
      </div>
    )
  }

  // set ssr to false if you only want to query in client side
  export default withApollo({ ssr: true })(MyPage)

  ```