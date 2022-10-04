import React from 'react'
import { useAtom } from 'jotai'
import { isDevAtom } from '@biztobiz/web/global/data-access'
import {
  AdminDeleteIndustryDocument,
  AdminUpdateIndustryDocument,
  useAdminIndustryQuery,
} from '@biztobiz/shared/util-sdk'
import { useParams } from 'react-router-dom'
import { cleanDatabaseOutput } from '@biztobiz/shared/utils/feature'
import { industryFields } from './web-admin-industry-helper'
import { WebAdminUpdateForm } from '@biztobiz/web-admin/crud-helper'

export function WebAdminIndustryUpdate() {
  const params = useParams()
  const [isDev] = useAtom(isDevAtom)

  const { data: industry, loading } = useAdminIndustryQuery({
    skip: !params?.['id'],
    variables: {
      industryId: params?.['id'] ?? 'NoId',
    },
  })

  if (!params?.['id']) return <div>No Id</div>

  function defaultValues() {
    if (industry?.industry && !loading) {
      return cleanDatabaseOutput(industry.industry, industryFields)
    } else {
      return undefined
    }
  }

  const pathData = {
    path: '/admin/industry/:id',
    name: 'Edit Industry',
    description: 'Update the information for this industry',
    showSearch: false,
    actionText: 'Back to Industry List',
    actionLink: '/admin/industries',
  }

  return (
    <WebAdminUpdateForm
      pathData={pathData}
      id={params['id']}
      defaultValues={defaultValues()}
      document={AdminUpdateIndustryDocument}
      deleteDocument={AdminDeleteIndustryDocument}
      buttonText={'Industry'}
      fields={industryFields}
      idName={'industryId'}
    />
  )
}
