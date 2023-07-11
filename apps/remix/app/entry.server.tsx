import type { EntryContext } from '@remix-run/node'
import { RemixServer } from '@remix-run/react'
import { renderToString } from 'react-dom/server'
import { otherRootRouteHandlers } from './otherRootRoutes.server'
import ApolloContext, { createApolloClient } from '@biztobiz/shared/util-apollo'
import { ApolloProvider } from '@apollo/client'
import Cookie from 'js-cookie'
import { getDataFromTree } from '@apollo/client/react/ssr'

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  for (const handler of otherRootRouteHandlers) {
    const otherRouteResponse = await handler(request, remixContext)
    if (otherRouteResponse) return otherRouteResponse
  }

  const client = createApolloClient('http://localhost:3000/graphql', () =>
    Promise.resolve({
      authorization: `Bearer ${Cookie.get('__session')}`,
    }),
  )

  const App = (
    <ApolloProvider client={client.client}>
      <RemixServer context={remixContext} url={request.url} />
    </ApolloProvider>
  )

  return getDataFromTree(App).then(() => {
    const initialState = client.client.extract()

    const markup = renderToString(<ApolloContext.Provider value={initialState}>{App}</ApolloContext.Provider>)

    responseHeaders.set('Content-Type', 'text/html')

    return new Response('<!DOCTYPE html>' + markup, {
      status: responseStatusCode,
      headers: responseHeaders,
    })
  })
}
