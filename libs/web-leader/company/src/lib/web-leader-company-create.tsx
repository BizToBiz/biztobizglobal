import React from 'react'
import { LeaderCreateCompanyDocument } from '@biztobiz/shared/util-sdk'
import { companyFields, companySelectFields } from './web-leader/company-helper'
import { WebAdminCreateForm } from '@biztobiz/web-admin/crud-helper'

export function WebLeaderCompanyCreate() {
  const pathData = {
    path: '/leader/companies/new',
    name: 'Create a Company',
    description: 'Use the form below to add a new company',
    showSearch: false,
    actionText: 'Back to Company List',
    actionLink: '/leader/companies',
  }

  return (
    <WebAdminCreateForm
      pathData={pathData}
      document={LeaderCreateCompanyDocument}
      navigateTo={'/leader/company'}
      mutationName={'createCompany'}
      buttonText={' Company'}
      fields={companyFields}
      selectFields={companySelectFields}
    />
  )
}
