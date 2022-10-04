import { useUptimeQuery } from '@biztobiz/shared/util-sdk'
import React from 'react'

export function WebDashboardUptimeWidget() {
  const uptime = useUptimeQuery({ pollInterval: 1000 })

  return (
    <div className="flex py-40 rounded-lg bg-blue-100 text-blue-800 items-center justify-center my-3 ">
      Server Uptime: {uptime?.data?.uptime}
    </div>
  )
}
