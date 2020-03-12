import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';

/**
 * Creates and configures the ApolloClient
 * @param  {Object} [initialState={}]
 * @param  {Object} [ctx={}]
 *   The `ctx` (NextPageContext) will only be present on the server.
 *   use it to extract auth headers (ctx.req) or similar.
 */
export default function createApolloClient(initialState = {}, ctx = {}) {
  const isBrowser = typeof window != 'undefined';

  // Debug
  console.log(`createApolloClient - ${isBrowser ? 'client' : 'server'} side`);

  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
    link: new HttpLink({
      uri: 'http://localhost:4001/graphql', // Server URL (must be absolute)
      credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
      fetch
    }),
    cache: new InMemoryCache().restore(initialState)
  });
}
