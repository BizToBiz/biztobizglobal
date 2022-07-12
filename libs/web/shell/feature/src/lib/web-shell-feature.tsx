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
import {
  WebAdminChapterCreate,
  WebAdminChapterList,
  WebAdminChapterUpdate,
  WebAdminDashboardFeature,
} from '@biztobiz/web/admin-dashboard/feature'
import { WebUiAdminLayoutFeature } from '@biztobiz/web-ui/admin-layout/feature'
import { WebAdminUserList } from '../../../../admin-dashboard/feature/src/lib/web-admin-user/web-admin-user-list'
import { WebAdminUserCreate } from '../../../../admin-dashboard/feature/src/lib/web-admin-user/web-admin-user-create'
import { WebAdminUserUpdate } from '../../../../admin-dashboard/feature/src/lib/web-admin-user/web-admin-user-update'

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

function AdminOutlet(props) {
  const [isAdmin] = useAtom(isAdminAtom)
  return isAdmin ? (
    <WebUiAdminLayoutFeature user={props.user}>
      <Outlet />
    </WebUiAdminLayoutFeature>
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
          <Route path="admin" element={<AdminOutlet user={user} />}>
            <Route path="dashboard" element={<WebAdminDashboardFeature />} />
            <Route path="chapters" element={<WebAdminChapterList />} />
            <Route path="chapter">
              <Route path="new" element={<WebAdminChapterCreate />} />
              <Route path=":id" element={<WebAdminChapterUpdate />} />
            </Route>
            <Route path="users" element={<WebAdminUserList />} />
            <Route path="user">
              <Route path="new" element={<WebAdminUserCreate />} />
              <Route path=":id" element={<WebAdminUserUpdate />} />
            </Route>
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
      </SharedAuthProvider>
    </ApolloProvider>
  )
}
