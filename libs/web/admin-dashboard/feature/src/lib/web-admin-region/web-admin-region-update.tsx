import React from 'react'
import { useAtom } from 'jotai'
import { isDevAtom } from '@biztobiz/web/global/data-access'
import { AdminUpdateTransactionDocument, useAdminRegionQuery } from '@biztobiz/shared/util-sdk'
import { useParams } from 'react-router-dom'
import { cleanObject } from '@biztobiz/shared/utils/feature'
import { WebUiDevDataFeature } from '@biztobiz/web-ui/dev-data/feature'
import { WebAdminUpdateForm } from '../web-admin-helper/web-admin-update-form'
import { transactionFields } from '../web-admin-transaction/web-admin-transaction-helper'

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
      return cleanObject(region.region)
    } else {
      return undefined
    }
  }

  const pathData = {
    path: '/admin/users/:id',
    name: 'Edit User',
    description: 'Update the information for this user',
    showSearch: false,
    actionText: 'Back to User List',
    actionLink: '/admin/users',
  }

  return (
    <>
      <WebAdminUpdateForm
        pathData={pathData}
        id={params['id']}
        defaultValues={defaultValues()}
        document={AdminUpdateTransactionDocument}
        buttonText={'Update Transaction'}
        fields={transactionFields}
        idName={'transactionId'}
      />
      {isDev ? <WebUiDevDataFeature data={defaultValues()} /> : null}
    </>
  )
}
