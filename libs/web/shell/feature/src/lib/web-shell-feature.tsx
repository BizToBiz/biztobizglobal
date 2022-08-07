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
  WebAdminCompanyCreate,
  WebAdminCompanyList,
  WebAdminCompanyUpdate,
  WebAdminDashboardFeature,
  WebAdminRegionCreate,
  WebAdminRegionList,
  WebAdminRegionUpdate,
  WebAdminTerritoryCreate,
  WebAdminTerritoryList,
  WebAdminTerritoryUpdate,
  WebAdminTransactionCreate,
  WebAdminTransactionList,
  WebAdminTransactionUpdate,
  WebAdminUserCreate,
  WebAdminUserList,
  WebAdminUserUpdate,
} from '@biztobiz/web/admin-dashboard/feature'
import { WebUiAdminLayoutFeature } from '@biztobiz/web-ui/admin-layout/feature'

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
            <Route path="transactions" element={<WebAdminTransactionList />} />
            <Route path="transaction">
              <Route path="new" element={<WebAdminTransactionCreate />} />
              <Route path=":id" element={<WebAdminTransactionUpdate />} />
            </Route>
            <Route path="companies" element={<WebAdminCompanyList />} />
            <Route path="company">
              <Route path="new" element={<WebAdminCompanyCreate />} />
              <Route path=":id" element={<WebAdminCompanyUpdate />} />
            </Route>
            <Route path="territories" element={<WebAdminTerritoryList />} />
            <Route path="territory">
              <Route path="new" element={<WebAdminTerritoryCreate />} />
              <Route path=":id" element={<WebAdminTerritoryUpdate />} />
            </Route>{' '}
            <Route path="regions" element={<WebAdminRegionList />} />
            <Route path="region">
              <Route path="new" element={<WebAdminRegionCreate />} />
              <Route path=":id" element={<WebAdminRegionUpdate />} />
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
