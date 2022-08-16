import React from 'react'
import { useAtom } from 'jotai'
import { isDevAtom } from '@biztobiz/web/global/data-access'
import { AdminDeleteCompanyDocument, AdminUpdateCompanyDocument, useAdminCompanyQuery } from '@biztobiz/shared/util-sdk'
import { useParams } from 'react-router-dom'
import { WebAdminUpdateForm } from '@biztobiz/web-admin/crud-helper'
import { companyFields, companySelectFields } from './web-admin-company-helper'
import { cleanFormInput } from '@biztobiz/shared/utils/feature'

export function WebAdminCompanyUpdate() {
  const params = useParams()
  const [isDev] = useAtom(isDevAtom)

  const { data: company } = useAdminCompanyQuery({
    skip: !params?.['id'],
    variables: {
      companyId: params?.['id'] ?? 'NoId',
    },
  })

  if (!params?.['id']) {
    return <div>No Id</div>
  }

  function defaultValues() {
    if (company?.company) {
      return cleanFormInput(company.company)
    } else {
      return undefined
    }
  }

  const pathData = {
    path: '/admin/company/:id',
    name: 'Edit Company',
    description: 'Update the information for this company',
    showSearch: false,
    actionText: 'Back to Company List',
    actionLink: '/admin/company',
  }

  return (
    <WebAdminUpdateForm
      pathData={pathData}
      id={params['id']}
      idName={'companyId'}
      defaultValues={defaultValues()}
      document={AdminUpdateCompanyDocument}
      deleteDocument={AdminDeleteCompanyDocument}
      buttonText={'Company'}
      fields={companyFields}
      selectFields={companySelectFields}
    />
  )
}
