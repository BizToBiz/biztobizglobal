import React from 'react'
import { AdminCreateCompanyDocument } from '@biztobiz/shared/util-sdk'
import { companyFields, companySelectFields } from './web-admin-company-helper'
import { WebAdminCreateForm } from '@biztobiz/web-admin/crud-helper'

export function WebAdminCompanyCreate() {
  const pathData = {
    path: '/admin/companies/new',
    name: 'Create a Company',
    description: 'Use the form below to add a new company',
    showSearch: false,
    actionText: 'Back to Company List',
    actionLink: '/admin/companies',
  }

  return (
    <WebAdminCreateForm
      pathData={pathData}
      document={AdminCreateCompanyDocument}
      navigateTo={'/admin/company'}
      mutationName={'createCompany'}
      buttonText={' Company'}
      fields={companyFields}
      selectFields={companySelectFields}
    />
  )
}
