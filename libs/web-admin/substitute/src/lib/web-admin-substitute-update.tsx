import React from 'react'
import { useAtom } from 'jotai'
import { isDevAtom } from '@biztobiz/web/global/data-access'
import {
  AdminDeleteSubstituteDocument,
  AdminUpdateSubstituteDocument,
  useAdminSubstituteQuery,
} from '@biztobiz/shared/util-sdk'
import { useParams } from 'react-router-dom'
import { cleanDatabaseOutput } from '@biztobiz/shared/utils/feature'
import { substituteFields, substituteSelectFields } from './web-admin-substitute-helper'
import { WebAdminUpdateForm } from '@biztobiz/web-admin/crud-helper'

export function WebAdminSubstituteUpdate() {
  const params = useParams()
  const [isDev] = useAtom(isDevAtom)

  const { data: substitute, loading } = useAdminSubstituteQuery({
    skip: !params?.['id'],
    variables: {
      substituteId: params?.['id'] ?? 'NoId',
    },
  })

  if (!params?.['id']) return <div>No Id</div>

  function defaultValues() {
    if (substitute?.substitute && !loading) {
      return cleanDatabaseOutput(substitute.substitute, substituteSelectFields)
    } else {
      return undefined
    }
  }

  const pathData = {
    path: '/admin/substitute/:id',
    name: 'Edit Substitute',
    description: 'Update the information for this substitute',
    showSearch: false,
    actionText: 'Back to Substitute List',
    actionLink: '/admin/substitutes',
  }

  return (
    <WebAdminUpdateForm
      pathData={pathData}
      id={params['id']}
      defaultValues={defaultValues()}
      document={AdminUpdateSubstituteDocument}
      deleteDocument={AdminDeleteSubstituteDocument}
      buttonText={'Substitute'}
      fields={substituteFields}
      idName={'substituteId'}
      selectFields={substituteSelectFields}
    />
  )
}
