import React from 'react'
import { useAtom } from 'jotai'
import { isDevAtom } from '@biztobiz/web/global/data-access'
import {
  LeaderDeleteCompanyDocument,
  LeaderUpdateCompanyDocument,
  useLeaderCompanyQuery,
} from '@biztobiz/shared/util-sdk'
import { useParams } from 'react-router-dom'
import { cleanDatabaseOutput } from '@biztobiz/shared/utils/feature'
import { companyFields, companySelectFields } from './web-leader-company-helper'
import { WebAdminUpdateForm } from '@biztobiz/web-admin/crud-helper'

export function WebLeaderCompanyUpdate() {
  const params = useParams()
  const [isDev] = useAtom(isDevAtom)

  const { data: company, loading } = useLeaderCompanyQuery({
    skip: !params?.['id'],
    variables: {
      companyId: params?.['id'] ?? 'NoId',
    },
  })

  if (!params?.['id']) return <div>No Id</div>

  function defaultValues() {
    if (company?.company && !loading) {
      return cleanDatabaseOutput(company.company, companySelectFields)
    } else {
      return undefined
    }
  }

  const pathData = {
    path: '/leader/company/:id',
    name: 'Edit Company',
    description: 'Update the information for this company',
    showSearch: false,
    actionText: 'Back to Company List',
    actionLink: '/leader/companies',
  }

  return (
    <WebAdminUpdateForm
      pathData={pathData}
      id={params['id']}
      defaultValues={defaultValues()}
      document={LeaderUpdateCompanyDocument}
      deleteDocument={LeaderDeleteCompanyDocument}
      buttonText={'Company'}
      fields={companyFields}
      idName={'companyId'}
      selectFields={companySelectFields}
    />
  )
}
