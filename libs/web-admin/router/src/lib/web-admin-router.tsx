import { useAtom } from 'jotai'
import { currentPathAtom, isAdminAtom } from '@biztobiz/web/global/data-access'
import { Navigate, Route, Routes } from 'react-router-dom'
import React from 'react'
import { User } from '@biztobiz/shared/util-sdk'
import { WebAdminDashboard } from '@biztobiz/web-admin/dashboard'
import { HomeIcon } from '@heroicons/react/outline'
import { WebUiAdminLayoutFeature } from '@biztobiz/web-ui/admin-layout/feature'

import { WebAdminChapterCreate, WebAdminChapterList, WebAdminChapterUpdate } from '@biztobiz/web-admin/chapter'

import { WebAdminCompanyCreate, WebAdminCompanyList, WebAdminCompanyUpdate } from '@biztobiz/web-admin/company'
import { WebAdminReferralCreate, WebAdminReferralList, WebAdminReferralUpdate } from '@biztobiz/web-admin/referral'
// Add New Imports Here

export interface WebAdminRouterProps {
  user: User
}

export function WebAdminRouter(props: WebAdminRouterProps) {
  const [isAdmin] = useAtom(isAdminAtom)
  const [currentPath] = useAtom(currentPathAtom)

  const navigation = [
    {
      name: 'Dashboard',
      href: '/admin/dashboard',
      icon: HomeIcon,
      current: currentPath.path.includes('/admin/dashboard'),
    },
    {
      name: 'Chapters',
      href: '/admin/chapters',
      icon: HomeIcon,
      current: currentPath.path.includes('/admin/chapters'),
    },
    {
      name: 'Companies',
      href: '/admin/companies',
      icon: HomeIcon,
      current: currentPath.path.includes('/admin/companies'),
    },
    {
      name: 'Referrals',
      href: '/admin/referrals',
      icon: HomeIcon,
      current: currentPath.path.includes('/admin/referrals'),
    },
    // Add New Nav Objects Here
  ]

  return isAdmin ? (
    <WebUiAdminLayoutFeature user={props.user} navigation={navigation}>
      <Routes>
        <Route path="dashboard" element={<WebAdminDashboard />} />
        <Route path="chapters" element={<WebAdminChapterList />} />
        <Route path="chapter">
          <Route path="new" element={<WebAdminChapterCreate />} />
          <Route path=":id" element={<WebAdminChapterUpdate />} />
        </Route>
        <Route path="companies" element={<WebAdminCompanyList />} />
        <Route path="company">
          <Route path="new" element={<WebAdminCompanyCreate />} />
          <Route path=":id" element={<WebAdminCompanyUpdate />} />
        </Route>
        <Route path="referrals" element={<WebAdminReferralList />} />
        <Route path="referral">
          <Route path="new" element={<WebAdminReferralCreate />} />
          <Route path=":id" element={<WebAdminReferralUpdate />} />
        </Route>
        {/*Add New Routes Here*/}
      </Routes>
    </WebUiAdminLayoutFeature>
  ) : (
    <Navigate to="/login" />
  )
}

export default WebAdminRouter
