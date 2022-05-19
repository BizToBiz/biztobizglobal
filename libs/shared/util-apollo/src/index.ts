import { ApolloClient, InMemoryCache } from '@apollo/client'
import { onError } from '@apollo/client/link/error'

export function createApolloClient(uri: string): ApolloClient<any> {
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(`[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(locations)}, Path: ${path}`),
      )

    if (networkError) console.log(`[Network error]: ${networkError}`)
  })

  return new ApolloClient({
    uri,
    cache: new InMemoryCache(),
    credentials: 'same-origin',
    defaultOptions: { watchQuery: { fetchPolicy: 'cache-and-network' } },
  })
}
