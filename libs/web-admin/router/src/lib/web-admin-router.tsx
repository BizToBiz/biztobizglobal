/* eslint-disable-next-line */
import { Navigate, Route, Routes } from 'react-router-dom'
import {
  WebAdminCompanyCreate,
  WebAdminCompanyList,
  WebAdminCompanyUpdate,
  WebAdminReferralCreate,
  WebAdminReferralList,
  WebAdminReferralUpdate,
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
import { WebAdminChapterCreate, WebAdminChapterList, WebAdminChapterUpdate } from '@biztobiz/web-admin/chapter'
import React from 'react'
import { useAtom } from 'jotai'
import { isAdminAtom } from '@biztobiz/web/global/data-access'
import { WebUiAdminLayoutFeature } from '@biztobiz/web-ui/admin-layout/feature'
import { User } from '@biztobiz/shared/util-sdk'
import { WebAdminDashboard } from '@biztobiz/web-admin/dashboard'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface WebAdminRouterProps {
  user: User
}

export function WebAdminRouter(props: WebAdminRouterProps) {
  const [isAdmin] = useAtom(isAdminAtom)

  return isAdmin ? (
    <WebUiAdminLayoutFeature user={props.user}>
      <Routes>
        <Route path="dashboard" element={<WebAdminDashboard />} />
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
        <Route path="referrals" element={<WebAdminReferralList />} />
        <Route path="referral">
          <Route path="new" element={<WebAdminReferralCreate />} />
          <Route path=":id" element={<WebAdminReferralUpdate />} />
        </Route>
      </Routes>
    </WebUiAdminLayoutFeature>
  ) : (
    <Navigate to="/login" />
  )
}

export default WebAdminRouter
