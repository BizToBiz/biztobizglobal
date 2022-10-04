import React from 'react'
import { AdminCreateCompanyMemberDocument } from '@biztobiz/shared/util-sdk'
import { companyMemberFields } from './web-admin-company-member-helper'
import { WebAdminCreateForm } from '@biztobiz/web-admin/crud-helper'

export function WebAdminCompanyMemberCreate() {
  const pathData = {
    path: '/admin/company-members/new',
    name: 'Create a Company Member',
    description: 'Use the form below to add a new Company Member',
    showSearch: false,
    actionText: 'Back to Company Member List',
    actionLink: '/admin/company-members',
  }

  return (
    <WebAdminCreateForm
      pathData={pathData}
      document={AdminCreateCompanyMemberDocument}
      navigateTo={'/admin/company-member'}
      mutationName={'createCompanyMember'}
      buttonText={' Company Member'}
      fields={companyMemberFields}
    />
  )
}
