import { useAtom } from 'jotai'
import { currentPathAtom, isAdminAtom } from '@biztobiz/web/global/data-access'
import { Navigate, Route, Routes } from 'react-router-dom'
import React from 'react'
import { User } from '@biztobiz/shared/util-sdk'
import { WebAdminDashboard } from '@biztobiz/web-admin/dashboard'
import { HomeIcon } from '@heroicons/react/outline'
import { WebUiAdminLayoutFeature } from '@biztobiz/web-ui/admin-layout/feature'

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
    // Add New Nav Objects Here
  ]

  return isAdmin ? (
    <WebUiAdminLayoutFeature user={props.user} navigation={navigation}>
      <Routes>
        <Route path="dashboard" element={<WebAdminDashboard />} />
        {/*Add New Routes Here*/}
      </Routes>
    </WebUiAdminLayoutFeature>
  ) : (
    <Navigate to="/login" />
  )
}

export default WebAdminRouter
