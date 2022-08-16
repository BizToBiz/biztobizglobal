import { useAtom } from 'jotai'
import { currentPathAtom, isAdminAtom } from '@biztobiz/web/global/data-access'
import { Navigate, Route, Routes } from 'react-router-dom'
import React from 'react'
import { User } from '@biztobiz/shared/util-sdk'
import { WebLeaderDashboard } from '@biztobiz/web-leader/dashboard'
import { WebLeaderChapterCreate, WebLeaderChapterList, WebLeaderChapterUpdate } from '@biztobiz/web-leader/chapter'
import { WebLeaderCompanyCreate, WebLeaderCompanyList, WebLeaderCompanyUpdate } from '@biztobiz/web-leader/company'
import { HomeIcon } from '@heroicons/react/outline'
import { WebUiAdminLayoutFeature } from '@biztobiz/web-ui/admin-layout/feature'

// Add New Imports Here

export interface WebLeaderRouterProps {
  user: User
}

export function WebLeaderRouter(props: WebLeaderRouterProps) {
  const [isAdmin] = useAtom(isAdminAtom)
  const [currentPath] = useAtom(currentPathAtom)

  const navigation = [
    {
      name: 'Dashboard',
      href: '/leader/dashboard',
      icon: HomeIcon,
      current: currentPath.path.includes('/leader/dashboard'),
    },
    // Add New Nav Objects Here
  ]

  return props?.user?.isLeader ? (
    <WebUiAdminLayoutFeature user={props.user} navigation={navigation}>
      <Routes>
        <Route path="dashboard" element={<WebLeaderDashboard />} />
        <Route path="chapters" element={<WebLeaderChapterList />} />
        <Route path="chapter">
          <Route path="new" element={<WebLeaderChapterCreate />} />
          <Route path=":id" element={<WebLeaderChapterUpdate />} />
        </Route>
        <Route path="companies" element={<WebLeaderCompanyList />} />
        <Route path="company">
          <Route path="new" element={<WebLeaderCompanyCreate />} />
          <Route path=":id" element={<WebLeaderCompanyUpdate />} />
        </Route>
        {/*Add New Routes Here*/}
      </Routes>
    </WebUiAdminLayoutFeature>
  ) : (
    <Navigate to="/login" />
  )
}

export default WebLeaderRouter
