import React from 'react'
import { useAtom } from 'jotai'
import { isDevAtom } from '@biztobiz/web/global/data-access'
import {
  AdminDeletePowerHourDocument,
  AdminUpdatePowerHourDocument,
  useAdminPowerHourQuery,
} from '@biztobiz/shared/util-sdk'
import { useParams } from 'react-router-dom'
import { cleanDatabaseOutput } from '@biztobiz/shared/utils/feature'
import { powerHourFields } from './web-admin-power-hour-helper'
import { WebAdminUpdateForm } from '@biztobiz/web-admin/crud-helper'

export function WebAdminPowerHourUpdate() {
  const params = useParams()
  const [isDev] = useAtom(isDevAtom)

  const { data: powerHour, loading } = useAdminPowerHourQuery({
    skip: !params?.['id'],
    variables: {
      powerHourId: params?.['id'] ?? 'NoId',
    },
  })

  if (!params?.['id']) return <div>No Id</div>

  function defaultValues() {
    if (powerHour?.powerHour && !loading) {
      return cleanDatabaseOutput(powerHour.powerHour, powerHourFields)
    } else {
      return undefined
    }
  }

  const pathData = {
    path: '/admin/power-hour/:id',
    name: 'Edit Power Hour',
    description: 'Update the information for this power hour',
    showSearch: false,
    actionText: 'Back to Power Hour List',
    actionLink: '/admin/power-hours',
  }

  return (
    <WebAdminUpdateForm
      pathData={pathData}
      id={params['id']}
      defaultValues={defaultValues()}
      document={AdminUpdatePowerHourDocument}
      deleteDocument={AdminDeletePowerHourDocument}
      buttonText={'Power Hour'}
      fields={powerHourFields}
      idName={'powerHourId'}
    />
  )
}
