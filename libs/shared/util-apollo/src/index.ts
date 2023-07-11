import { ApolloClient, ApolloLink, createHttpLink, from, InMemoryCache, split } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { WebSocketLink } from '@apollo/client/link/ws'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import { getMainDefinition } from '@apollo/client/utilities'
import { onError } from 'apollo-link-error'
import { createContext } from 'react'
import ws from 'ws'

const isBrowser = typeof window !== 'undefined'

const initialState = isBrowser ? window.__INITIAL_STATE__ : {}
export function createApolloClient(
  uri: string,
  getHeaders?: () => Promise<{ authorization?: string }>,
  ssrMode = true,
) {
  const httpLink = createHttpLink({ uri })

  const authLink = setContext(async (_, { headers }) => {
    const headers1 = await getHeaders()
    console.log({ headers1 })
    // return the headers to the context so httpLink can read them
    const authHeader = await getHeaders()
    return {
      headers: { ...headers, ...authHeader },
    }
  })

  const subClient = new SubscriptionClient(
    uri.replace('http', 'ws'),
    {
      connectionParams: async () => {
        return getHeaders()
      },
      lazy: true,
      reconnect: true,
      timeout: 45000,
    },
    ws,
  )

  const socket = new WebSocketLink(subClient)

  function closeSocket(): void {
    subClient.unsubscribeAll()
    subClient.close(true)
  }

  const logLink = new ApolloLink((operation, forward) => {
    return forward(operation).map((result) => {
      // console.log("RESULT:", result.data)
      return result
    })
  })

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) => {
        const error = `[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(
          locations,
          null,
          4,
        )}, Path: ${path}`
        console.error(error)
        if (process.env.NODE_ENV === 'development') {
          console.error(error)
        } else {
          // Log to external service
        }
      })
    if (networkError) {
      const error = `[Network error]: ${networkError}`
      console.error(error)
      if (process.env.NODE_ENV === 'development') {
        console.error(error)
      } else {
        // Log to external service
      }
    }
  })

  let link = split(
    ({ query }) => {
      const definition = getMainDefinition(query)
      return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
    },
    socket,
    authLink,
  )

  link = from([
    link,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    errorLink,
  ])

  function getUniqueListBy(arr, key) {
    return [...new Map(arr.map((item) => [item[key], item])).values()]
  }

  const client = new ApolloClient({
    link: link.concat(httpLink),
    cache: new InMemoryCache().restore(initialState),
    defaultOptions: { watchQuery: { fetchPolicy: 'cache-and-network' } },
    ssrMode,
  })

  // TODO: Fix merge logic when apollo updates.
  return { client, closeSocket }
}

export default createContext(initialState)
