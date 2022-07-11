import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { onError } from '@apollo/client/link/error'

export function createApolloClient(uri: string): ApolloClient<any> {
  const httpLink = createHttpLink({
    uri,
  })

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) => {
        const error = `[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(
          locations,
          null,
          4,
        )}, Path: ${path}`
        if (process.env.NODE_ENV === 'development') {
          console.error(error)
        } else {
          // TODO: Send error to live reporting service
        }
      })
    if (networkError) {
      const error = `[Network error]: ${networkError}`
      if (process.env.NODE_ENV === 'development') {
        console.error(error)
      } else {
        //TODO: Send error to live reporting service
      }
    }
  })

  return new ApolloClient({
    link: errorLink.concat(httpLink),
    cache: new InMemoryCache(),
    credentials: 'same-origin',
    defaultOptions: { watchQuery: { fetchPolicy: 'cache-and-network' } },
  })
}
