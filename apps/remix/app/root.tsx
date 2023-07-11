import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, V2_MetaFunction } from '@remix-run/react'
import { identityAtom, isRememberedAtom, spyAtom } from '@biztobiz/web/global/data-access'
import { SharedAuthProvider } from '@biztobiz/shared/auth/data-access'
import ApolloContext from '@biztobiz/shared/util-apollo'
import { useContext } from 'react'

export const meta: V2_MetaFunction = () => {
  return [{ charset: 'utf-8' }, { title: 'New Remix App' }, { viewport: 'width=device-width,initial-scale=1' }]
}

export default function App() {
  const initialState = useContext(ApolloContext)

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <SharedAuthProvider identityAtom={identityAtom} isRememberedAtom={isRememberedAtom} spyAtom={spyAtom}>
          <Outlet />
        </SharedAuthProvider>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />

        <script
          dangerouslySetInnerHTML={{
            __html: `window.__INITIAL_STATE__=${JSON.stringify(initialState).replace(/</g, '\\u003c')};`,
          }}
        />
      </body>
    </html>
  )
}
