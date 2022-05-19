import { useMeQuery, useUptimeQuery } from '@biztobiz/shared/util-sdk'
import React from 'react'
import { useAtom } from 'jotai'
import { isAdminAtom, isAuthenticatedAtom } from '@biztobiz/web/global/data-access'
import { WebDashboardUptimeWidget } from './web-dashboard-uptime-widget'

export function WebDashboardFeature() {
  const me = useMeQuery()
  const [isAdmin] = useAtom(isAdminAtom)
  const [isAuthenticated] = useAtom(isAuthenticatedAtom)
  console.log(isAdmin, isAuthenticated)

  return (
    <div className={'container mx-auto'}>
      <div className="grid grid-cols-3 gap-12">
        <div className="flex py-40 rounded-lg bg-green-200 text-green-800 text-lg items-center justify-center my-3 ">
          React Dashboard
        </div>
        <div className="flex py-40 rounded-lg bg-pink-100 text-pink-800 items-center justify-center my-3 ">
          Logged in as: {me?.data?.me?.username}
        </div>
        <WebDashboardUptimeWidget />
      </div>
    </div>
  )
}
