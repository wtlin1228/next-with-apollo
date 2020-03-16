import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import fetch from 'isomorphic-unfetch'
import resolvers from './resolvers'
import typeDefs from './schema'

/**
 * Creates and configures the ApolloClient
 * @param  {Object} [initialState={}]
 * @param  {Object} [ctx={}]
 *   The `ctx` (NextPageContext) will only be present on the server.
 *   use it to extract auth headers (ctx.req) or similar.
 */
export default function createApolloClient(initialState = {}, ctx = {}) {
  const isBrowser = typeof window != 'undefined'

  const link = new HttpLink({
    uri: 'http://localhost:8888/graphql', // Server URL (must be absolute)
    credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
    fetch
  })

  const cache = new InMemoryCache().restore(initialState)
  cache.writeData({
    data: {
      isLoggedIn: isBrowser ? localStorage.getItem('token') : '',
      cartItems: []
    }
  })

  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
    link,
    cache,
    resolvers,
    typeDefs
  })
}
