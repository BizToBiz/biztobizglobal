import React from 'react'
import { AdminCreateCompanyMemberDocument } from '@biztobiz/shared/util-sdk'
import { companyMemberFields, companyMemberSelectFields } from './web-admin-company-member-helper'
import { WebAdminCreateForm } from '@biztobiz/web-admin/crud-helper'

export function WebAdminCompanyMemberCreate() {
  const pathData = {
    path: '/admin/company-members/new',
    name: 'Create a CompanyMember',
    description: 'Use the form below to add a new CompanyMember',
    showSearch: false,
    actionText: 'Back to CompanyMember List',
    actionLink: '/admin/company-members',
  }

  return (
    <WebAdminCreateForm
      pathData={pathData}
      document={AdminCreateCompanyMemberDocument}
      navigateTo={'/admin/company-member'}
      mutationName={'createCompanyMember'}
      buttonText={' CompanyMember'}
      fields={companyMemberFields}
      selectFields={companyMemberSelectFields}
    />
  )
}
