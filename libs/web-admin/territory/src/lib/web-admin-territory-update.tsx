import React from 'react'
import { useAtom } from 'jotai'
import { isDevAtom } from '@biztobiz/web/global/data-access'
import {
  AdminDeleteTerritoryDocument,
  AdminUpdateTerritoryDocument,
  useAdminTerritoryQuery,
} from '@biztobiz/shared/util-sdk'
import { useParams } from 'react-router-dom'
import { cleanDatabaseOutput } from '@biztobiz/shared/utils/feature'
import { territoryFields } from './web-admin-territory-helper'
import { WebAdminUpdateForm } from '@biztobiz/web-admin/crud-helper'

export function WebAdminTerritoryUpdate() {
  const params = useParams()
  const [isDev] = useAtom(isDevAtom)

  const { data: territory, loading } = useAdminTerritoryQuery({
    skip: !params?.['id'],
    variables: {
      territoryId: params?.['id'] ?? 'NoId',
    },
  })

  if (!params?.['id']) return <div>No Id</div>

  function defaultValues() {
    if (territory?.territory && !loading) {
      return cleanDatabaseOutput(territory.territory, territoryFields)
    } else {
      return undefined
    }
  }

  const pathData = {
    path: '/admin/territory/:id',
    name: 'Edit Territory',
    description: 'Update the information for this territory',
    showSearch: false,
    actionText: 'Back to Territory List',
    actionLink: '/admin/territories',
  }

  return (
    <WebAdminUpdateForm
      pathData={pathData}
      id={params['id']}
      defaultValues={defaultValues()}
      document={AdminUpdateTerritoryDocument}
      deleteDocument={AdminDeleteTerritoryDocument}
      buttonText={'Territory'}
      fields={territoryFields}
      idName={'territoryId'}
    />
  )
}
