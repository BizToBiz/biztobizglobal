import React from 'react'
import { useAtom } from 'jotai'
import { isDevAtom } from '@biztobiz/web/global/data-access'
import { AdminDeleteRegionDocument, AdminUpdateRegionDocument, useAdminRegionQuery } from '@biztobiz/shared/util-sdk'
import { useParams } from 'react-router-dom'
import { cleanDatabaseOutput } from '@biztobiz/shared/utils/feature'
import { regionFields, regionSelectFields } from './web-admin-region-helper'
import { WebAdminUpdateForm } from '@biztobiz/web-admin/crud-helper'

export function WebAdminRegionUpdate() {
  const params = useParams()
  const [isDev] = useAtom(isDevAtom)

  const { data: region, loading } = useAdminRegionQuery({
    skip: !params?.['id'],
    variables: {
      regionId: params?.['id'] ?? 'NoId',
    },
  })

  if (!params?.['id']) return <div>No Id</div>

  function defaultValues() {
    if (region?.region && !loading) {
      return cleanDatabaseOutput(region.region, regionSelectFields)
    } else {
      return undefined
    }
  }

  const pathData = {
    path: '/admin/region/:id',
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
      selectFields={regionSelectFields}
    />
  )
}
