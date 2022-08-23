import { useAtom } from 'jotai'
import { currentPathAtom } from '@biztobiz/web/global/data-access'
import { Navigate, Route, Routes } from 'react-router-dom'
import React, { useContext } from 'react'
import { User } from '@biztobiz/shared/util-sdk'
import { WebLeaderDashboard } from '@biztobiz/web-leader/dashboard'
import { HomeIcon } from '@heroicons/react/outline'
import { WebUiAdminLayoutFeature } from '@biztobiz/web-ui/admin-layout/feature'
import { SharedAuthContext } from '@biztobiz/shared/auth/data-access'

// Add New Imports Here

export interface WebLeaderRouterProps {
  user: User
}

export function WebLeaderRouter(props: WebLeaderRouterProps) {
  const [currentPath] = useAtom(currentPathAtom)
  const { logout } = useContext(SharedAuthContext)

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
    <WebUiAdminLayoutFeature user={props.user} navigation={navigation} logout={logout}>
      <Routes>
        <Route path="dashboard" element={<WebLeaderDashboard />} />
        {/*Add New Routes Here*/}
      </Routes>
    </WebUiAdminLayoutFeature>
  ) : (
    <Navigate to="/login" />
  )
}

export default WebLeaderRouter
