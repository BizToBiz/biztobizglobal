import React from 'react'
import { useAtom } from 'jotai'
import { isDevAtom } from '@biztobiz/web/global/data-access'
import { AdminUpdateTerritoryDocument, useAdminTerritoryQuery } from '@biztobiz/shared/util-sdk'
import { useParams } from 'react-router-dom'
import { cleanObject } from '@biztobiz/shared/utils/feature'
import { WebUiDevDataFeature } from '@biztobiz/web-ui/dev-data/feature'
import { mapRegions, mapUser } from '../web-admin-helper/web-admin-helper'
import { territoryFields } from './web-admin-territory-helper'
import { WebAdminUpdateForm } from '../web-admin-helper/web-admin-update-form'

export function WebAdminTerritoryUpdate() {
  const params = useParams()
  const [isDev] = useAtom(isDevAtom)

  const { data: territory } = useAdminTerritoryQuery({
    skip: !params?.['id'],
    variables: {
      territoryId: params?.['id'] ?? 'NoId',
    },
  })

  if (!params?.['id']) {
    return <div>No Id</div>
  }

  function defaultValues() {
    if (territory?.territory) {
      const territoryValue = cleanObject(territory.territory)
      if (territory?.territory?.manager?.id) {
        territoryValue['managerId'] = mapUser(territory?.territory?.manager)
        delete territoryValue['manager']
      }
      if (territory?.territory?.regions && territory.territory.regions.length > 0) {
        territoryValue['regionIds'] = mapRegions(territory?.territory?.regions)
        delete territoryValue['regions']
      }
      return territoryValue
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
    actionLink: '/admin/territory',
  }

  return (
    <>
      <WebAdminUpdateForm
        pathData={pathData}
        id={params['id']}
        defaultValues={defaultValues()}
        document={AdminUpdateTerritoryDocument}
        buttonText={'Update Territory'}
        fields={territoryFields}
        idName={'territoryId'}
      />
      {isDev ? <WebUiDevDataFeature data={defaultValues()} /> : null}
    </>
  )
}
