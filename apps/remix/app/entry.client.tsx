import { ApolloProvider } from '@apollo/client'
import { hydrate } from 'react-dom'
import { RemixBrowser } from '@remix-run/react'
import { createApolloClient } from './context/apollo'
import Cookie from 'js-cookie'

function Client() {
  const client = createApolloClient(
    'http://localhost:3000/graphql',
    () =>
      Promise.resolve({
        authorization: `Bearer ${Cookie.get('__session')}`,
      }),
    false,
  )

  return (
    <ApolloProvider client={client.client}>
      <RemixBrowser />
    </ApolloProvider>
  )
}

hydrate(<Client />, document)
