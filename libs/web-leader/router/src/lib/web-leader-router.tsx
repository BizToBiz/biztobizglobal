import { useAtom } from 'jotai'
import { currentPathAtom } from '@biztobiz/web/global/data-access'
import { Navigate, Route, Routes } from 'react-router-dom'
import React, { useContext } from 'react'
import { User } from '@biztobiz/shared/util-sdk'
import { WebLeaderDashboard } from '@biztobiz/web-leader/dashboard'

import { WebUiAdminLayoutFeature } from '@biztobiz/web-ui/admin-layout/feature'
import { SharedAuthContext } from '@biztobiz/shared/auth/data-access'

import { WebLeaderReferralCreate, WebLeaderReferralList, WebLeaderReferralUpdate } from '@biztobiz/web-leader/referral'
import { WebLeaderTransactionReferralReport } from '@biztobiz/web-leader/transaction-referral-report'

import {
  WebLeaderTransactionCreate,
  WebLeaderTransactionList,
  WebLeaderTransactionUpdate,
} from '@biztobiz/web-leader/transaction'
import { BanknotesIcon, HomeIcon } from '@heroicons/react/24/outline'

// Add New Imports Here

export interface WebLeaderRouterProps {
  user: User
}

export function WebLeaderRouter(props: WebLeaderRouterProps) {
  const [currentPath] = useAtom(currentPathAtom)
  const { logout, spyOnUser } = useContext(SharedAuthContext)

  const navigation = [
    {
      name: 'Dashboard',
      href: '/leader/dashboard',
      icon: HomeIcon,
      current: currentPath.path.includes('/leader/dashboard'),
    },
    {
      name: 'Transactions & Referrals',
      href: '/leader/transactions-and-referrals',
      icon: BanknotesIcon,
      current: currentPath.path.includes('/leader/transactions-and-referrals'),
    },
    // {
    //   name: 'Referrals',
    //   href: '/leader/referrals',
    //   icon: InboxInIcon,
    //   current: currentPath.path.includes('/leader/referrals'),
    // },
    // {
    //   name: 'Transactions',
    //   href: '/leader/transactions',
    //   icon: CashIcon,
    //   current: currentPath.path.includes('/leader/transactions'),
    // },
    // Add New Nav Objects Here
  ]

  return props?.user?.isLeader || props?.user.role === 'Admin' ? (
    <WebUiAdminLayoutFeature user={props.user} navigation={navigation} logout={logout} spyOnUser={spyOnUser}>
      <Routes>
        <Route path="dashboard" element={<WebLeaderDashboard />} />
        <Route path="referrals" element={<WebLeaderReferralList />} />
        <Route path="referral">
          <Route path="new" element={<WebLeaderReferralCreate />} />
          <Route path=":id" element={<WebLeaderReferralUpdate />} />
        </Route>
        <Route path="transactions-and-referrals" element={<WebLeaderTransactionReferralReport />} />
        <Route path="transactions" element={<WebLeaderTransactionList />} />
        <Route path="transaction">
          <Route path="new" element={<WebLeaderTransactionCreate />} />
          <Route path=":id" element={<WebLeaderTransactionUpdate />} />
        </Route>
        {/*Add New Routes Here*/}
      </Routes>
    </WebUiAdminLayoutFeature>
  ) : (
    <Navigate to="/login" />
  )
}

export default WebLeaderRouter
