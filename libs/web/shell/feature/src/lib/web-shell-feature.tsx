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
import { identityAtom, isAdminAtom, isAuthenticatedAtom, isRememberedAtom } from '@biztobiz/web/global/data-access'
import { SharedAuthProvider } from '@biztobiz/shared/auth/data-access'

function PrivateOutlet() {
  const [isAuthenticated] = useAtom(isAuthenticatedAtom)
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

function AdminOutlet() {
  const [isAdmin] = useAtom(isAdminAtom)
  return isAdmin ? <Outlet /> : <Navigate to="/login" />
}
export function WebShellFeature() {
  const client = createApolloClient(environment.graphql)
  const [user] = useAtom(identityAtom)

  return (
    <ApolloProvider client={client}>
      <SharedAuthProvider identityAtom={identityAtom} isRememberedAtom={isRememberedAtom}>
        <WebUiLayout avatarUrl={user?.avatarUrl}>
          <Routes>
            <Route path="members" element={<PrivateOutlet />}>
              <Route path="dashboard" element={<WebDashboardFeature />} />
              <Route path="about" element={<WebAboutFeature />} />
            </Route>
            <Route path="admin" element={<AdminOutlet />}>
              <Route path="dashboard" element={<WebDashboardFeature />} />
            </Route>
            <Route path="/" element={<WebAboutFeature />} />
            <Route path="about" element={<WebAboutFeature />} />
            <Route path="dashboard" element={<WebDashboardFeature />} />

            <Route path="login" element={<WebFeatureLogin />} />
            <Route path="register" element={<WebFeatureRegister />} />
            <Route path="forgot-password" element={<WebFeatureForgotPassword />} />
            <Route path="reset-password" element={<WebFeatureResetPassword />} />
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </WebUiLayout>
      </SharedAuthProvider>
    </ApolloProvider>
  )
}
