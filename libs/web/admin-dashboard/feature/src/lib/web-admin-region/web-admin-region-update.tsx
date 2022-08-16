import React from 'react'
import { useAtom } from 'jotai'
import { isDevAtom } from '@biztobiz/web/global/data-access'
import { AdminDeleteRegionDocument, AdminUpdateRegionDocument, useAdminRegionQuery } from '@biztobiz/shared/util-sdk'
import { useParams } from 'react-router-dom'
import { cleanFormInput } from '@biztobiz/shared/utils/feature'
import { mapTerritory, mapUser, WebAdminUpdateForm } from '@biztobiz/web-admin/crud-helper'
import { regionFields } from './web-admin-region-helper'

export function WebAdminRegionUpdate() {
  const params = useParams()
  const [isDev] = useAtom(isDevAtom)

  const { data: region } = useAdminRegionQuery({
    skip: !params?.['id'],
    variables: {
      regionId: params?.['id'] ?? 'NoId',
    },
  })

  if (!params?.['id']) {
    return <div>No Id</div>
  }

  function defaultValues() {
    if (region?.region) {
      const regionValue = cleanFormInput(region.region)
      if (region?.region?.manager?.id) {
        regionValue['managerId'] = mapUser(region.region.manager)
        delete regionValue['manager']
      }
      if (region?.region?.territory?.id) {
        regionValue['territoryId'] = mapTerritory(region.region.territory)
        delete regionValue['territory']
      }
      return regionValue
    } else {
      return undefined
    }
  }

  const pathData = {
    path: '/admin/regions/:id',
    name: 'Edit Region',
    description: 'Update the information for this region',
    showSearch: false,
    actionText: 'Back to Region List',
    actionLink: '/admin/regions',
  }

  return (
    <WebAdminUpdateForm
      pathData={pathData}
      id={params['id']}
      defaultValues={defaultValues()}
      document={AdminUpdateRegionDocument}
      deleteDocument={AdminDeleteRegionDocument}
      buttonText={'Region'}
      fields={regionFields}
      idName={'regionId'}
    />
  )
}
