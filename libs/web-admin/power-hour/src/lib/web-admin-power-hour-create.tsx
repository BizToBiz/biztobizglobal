import React from 'react'
import { AdminCreatePowerHourDocument } from '@biztobiz/shared/util-sdk'
import { powerHourFields } from './web-admin-power-hour-helper'
import { WebAdminCreateForm } from '@biztobiz/web-admin/crud-helper'

export function WebAdminPowerHourCreate() {
  const pathData = {
    path: '/admin/power-hours/new',
    name: 'Create a PowerHour',
    description: 'Use the form below to add a new PowerHour',
    showSearch: false,
    actionText: 'Back to PowerHour List',
    actionLink: '/admin/power-hours',
  }

  return (
    <WebAdminCreateForm
      pathData={pathData}
      document={AdminCreatePowerHourDocument}
      navigateTo={'/admin/power-hour'}
      mutationName={'createPowerHour'}
      buttonText={' PowerHour'}
      fields={powerHourFields}
    />
  )
}
