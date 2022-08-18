import React from 'react'
import { useAtom } from 'jotai'
import { isDevAtom } from '@biztobiz/web/global/data-access'
import {
  AdminDeleteSubstituteGroupDocument,
  AdminUpdateSubstituteGroupDocument,
  useAdminSubstituteGroupQuery,
} from '@biztobiz/shared/util-sdk'
import { useParams } from 'react-router-dom'
import { cleanDatabaseOutput } from '@biztobiz/shared/utils/feature'
import { substituteGroupFields, substituteGroupSelectFields } from './web-admin-substitute-group-helper'
import { WebAdminUpdateForm } from '@biztobiz/web-admin/crud-helper'

export function WebAdminSubstituteGroupUpdate() {
  const params = useParams()
  const [isDev] = useAtom(isDevAtom)

  const { data: substituteGroup, loading } = useAdminSubstituteGroupQuery({
    skip: !params?.['id'],
    variables: {
      substituteGroupId: params?.['id'] ?? 'NoId',
    },
  })

  if (!params?.['id']) return <div>No Id</div>

  function defaultValues() {
    if (substituteGroup?.substituteGroup && !loading) {
      return cleanDatabaseOutput(substituteGroup.substituteGroup, substituteGroupSelectFields)
    } else {
      return undefined
    }
  }

  const pathData = {
    path: '/admin/substitute-group/:id',
    name: 'Edit SubstituteGroup',
    description: 'Update the information for this substitute-group',
    showSearch: false,
    actionText: 'Back to SubstituteGroup List',
    actionLink: '/admin/substitute-groups',
  }

  return (
    <WebAdminUpdateForm
      pathData={pathData}
      id={params['id']}
      defaultValues={defaultValues()}
      document={AdminUpdateSubstituteGroupDocument}
      deleteDocument={AdminDeleteSubstituteGroupDocument}
      buttonText={'SubstituteGroup'}
      fields={substituteGroupFields}
      idName={'substituteGroupId'}
      selectFields={substituteGroupSelectFields}
    />
  )
}
