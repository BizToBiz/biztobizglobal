import { useAtom } from 'jotai'
import { currentPathAtom, isAdminAtom } from '@biztobiz/web/global/data-access'
import { Navigate, Route, Routes } from 'react-router-dom'
import React from 'react'
import { User } from '@biztobiz/shared/util-sdk'
import { WebAdminDashboard } from '@biztobiz/web-admin/dashboard'
import { HomeIcon } from '@heroicons/react/outline'
import { WebUiAdminLayoutFeature } from '@biztobiz/web-ui/admin-layout/feature'

import { WebAdminUserCreate, WebAdminUserList, WebAdminUserUpdate } from '@biztobiz/web-admin/user'
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
      name: 'Users',
      href: '/admin/users',
      icon: HomeIcon,
      current: currentPath.path.includes('/admin/users'),
    },
    // Add New Nav Objects Here
  ]

  return isAdmin ? (
    <WebUiAdminLayoutFeature user={props.user} navigation={navigation}>
      <Routes>
        <Route path="dashboard" element={<WebAdminDashboard />} />
        <Route path="users" element={<WebAdminUserList />} />
        <Route path="user">
          <Route path="new" element={<WebAdminUserCreate />} />
          <Route path=":id" element={<WebAdminUserUpdate />} />
        </Route>
        {/*Add New Routes Here*/}
      </Routes>
    </WebUiAdminLayoutFeature>
  ) : (
    <Navigate to="/login" />
  )
}

export default WebAdminRouter
