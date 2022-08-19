import { ApolloProvider } from '@apollo/client'
import { createApolloClient } from '@biztobiz/shared/util-apollo'
import { WebAboutFeature } from '@biztobiz/web/about/feature'
import { WebDashboardFeature } from '@biztobiz/web/dashboard/feature'
import { environment } from '@biztobiz/web/environments'
import React from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'

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
  const client = createApolloClient(environment.graphql)
  const [user] = useAtom(identityAtom)

  return (
    <ApolloProvider client={client}>
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
