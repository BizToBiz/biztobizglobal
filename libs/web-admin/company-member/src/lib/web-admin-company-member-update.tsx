import React from 'react'
import { useAtom } from 'jotai'
import { isDevAtom } from '@biztobiz/web/global/data-access'
import {
  AdminDeleteCompanyMemberDocument,
  AdminUpdateCompanyMemberDocument,
  useAdminCompanyMemberQuery,
} from '@biztobiz/shared/util-sdk'
import { useParams } from 'react-router-dom'
import { cleanDatabaseOutput } from '@biztobiz/shared/utils/feature'
import { companyMemberFields } from './web-admin-company-member-helper'
import { WebAdminUpdateForm } from '@biztobiz/web-admin/crud-helper'

export function WebAdminCompanyMemberUpdate() {
  const params = useParams()
  const [isDev] = useAtom(isDevAtom)

  const { data: companyMember, loading } = useAdminCompanyMemberQuery({
    skip: !params?.['id'],
    variables: {
      companyMemberId: params?.['id'] ?? 'NoId',
    },
  })

  if (!params?.['id']) return <div>No Id</div>

  function defaultValues() {
    if (companyMember?.companyMember && !loading) {
      return cleanDatabaseOutput(companyMember.companyMember, companyMemberFields, ['name'])
    } else {
      return undefined
    }
  }

  const pathData = {
    path: '/admin/company-member/:id',
    name: 'Edit Company Member',
    description: 'Update the information for this company member',
    showSearch: false,
    actionText: 'Back to Company Member List',
    actionLink: '/admin/company-members',
  }

  return (
    <WebAdminUpdateForm
      pathData={pathData}
      id={params['id']}
      defaultValues={defaultValues()}
      document={AdminUpdateCompanyMemberDocument}
      deleteDocument={AdminDeleteCompanyMemberDocument}
      buttonText={'Company Member'}
      fields={companyMemberFields}
      idName={'companyMemberId'}
    />
  )
}
