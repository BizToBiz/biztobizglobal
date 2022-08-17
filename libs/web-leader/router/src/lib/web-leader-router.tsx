import { useAtom } from 'jotai'
import { currentPathAtom } from '@biztobiz/web/global/data-access'
import { Navigate, Route, Routes } from 'react-router-dom'
import React from 'react'
import { User } from '@biztobiz/shared/util-sdk'
import { WebLeaderDashboard } from '@biztobiz/web-leader/dashboard'
import { HomeIcon } from '@heroicons/react/outline'
import { WebUiAdminLayoutFeature } from '@biztobiz/web-ui/admin-layout/feature'

import { WebLeaderChapterCreate, WebLeaderChapterList, WebLeaderChapterUpdate } from '@biztobiz/web-leader/chapter'
// Add New Imports Here

export interface WebLeaderRouterProps {
  user: User
}

export function WebLeaderRouter(props: WebLeaderRouterProps) {
  const [currentPath] = useAtom(currentPathAtom)

  const navigation = [
    {
      name: 'Dashboard',
      href: '/leader/dashboard',
      icon: HomeIcon,
      current: currentPath.path.includes('/leader/dashboard'),
    },
    {
      name: 'Chapters',
      href: '/leader/chapters',
      icon: HomeIcon,
      current: currentPath.path.includes('/leader/chapters'),
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
        {/*Add New Routes Here*/}
      </Routes>
    </WebUiAdminLayoutFeature>
  ) : (
    <Navigate to="/login" />
  )
}

export default WebLeaderRouter
