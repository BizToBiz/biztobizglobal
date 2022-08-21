import { ApolloProvider } from '@apollo/client'
import { createApolloClient } from '@biztobiz/shared/util-apollo'
import { WebAboutFeature } from '@biztobiz/web/about/feature'
import { WebDashboardFeature } from '@biztobiz/web/dashboard/feature'
import React from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Cookie from 'js-cookie'

import { WebUiLayout } from '@biztobiz/web-ui/layout'
import {
  WebFeatureForgotPassword,
  WebFeatureLogin,
  WebFeatureRegister,
  WebFeatureResetPassword,
} from '@biztobiz/web/auth/feature'
import { useAtom } from 'jotai'
import { identityAtom, isAuthenticatedAtom, isRememberedAtom } from '@biztobiz/web/global/data-access'
import { SharedAuthProvider } from '@biztobiz/shared/auth/data-access'
import { WebAdminRouter } from '@biztobiz/web-admin/router'
import { WebLeaderRouter } from '@biztobiz/web-leader/router'

function PrivateOutlet(props) {
  const [isAuthenticated] = useAtom(isAuthenticatedAtom)
  return isAuthenticated ? (
    <WebUiLayout user={props.user}>
      <Outlet />
    </WebUiLayout>
  ) : (
    <Navigate to="/login" />
  )
}

export function WebShellFeature() {
  // eslint-disable-next-line no-restricted-globals
  const uri = `${location.protocol}//${location.hostname}:${location.port}/graphql`
  // if (process.env.REACT_APP_STAGE === 'true') {
  //   uri = ``
  // }
  // if (process.env.NODE_ENV === 'production') {
  //   uri = ``
  // }
  const wsUri = uri.replace('http', 'ws')
  console.log(`Bearer ${Cookie.get('__session')}`)
  const client = createApolloClient(uri, wsUri, () =>
    Promise.resolve({
      authorization: `Bearer ${Cookie.get('__session')}`,
    }),
  )
  const [user] = useAtom(identityAtom)

  return (
    <ApolloProvider client={client.client}>
      <SharedAuthProvider identityAtom={identityAtom} isRememberedAtom={isRememberedAtom}>
        <Routes>
          <Route path="members" element={<PrivateOutlet user={user} />}>
            <Route path="dashboard" element={<WebDashboardFeature />} />
            <Route path="about" element={<WebAboutFeature />} />
          </Route>
          <Route path="admin/*" element={<WebAdminRouter user={user} />}></Route>
          <Route path="leader/*" element={<WebLeaderRouter user={user} />}></Route>
          <Route path="/" element={<WebFeatureLogin />} />
          <Route path="about" element={<WebAboutFeature />} />
          <Route path="dashboard" element={<WebDashboardFeature />} />

          <Route path="login" element={<WebFeatureLogin />} />
          <Route path="register" element={<WebFeatureRegister />} />
          <Route path="forgot-password" element={<WebFeatureForgotPassword />} />
          <Route path="reset-password" element={<WebFeatureResetPassword />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </SharedAuthProvider>
    </ApolloProvider>
  )
}
