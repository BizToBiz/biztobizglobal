import React from 'react'
import { AdminCreateIndustryDocument } from '@biztobiz/shared/util-sdk'
import { industryFields, industrySelectFields } from './web-admin-industry-helper'
import { WebAdminCreateForm } from '@biztobiz/web-admin/crud-helper'

export function WebAdminIndustryCreate() {
  const pathData = {
    path: '/admin/industries/new',
    name: 'Create a Industry',
    description: 'Use the form below to add a new Industry',
    showSearch: false,
    actionText: 'Back to Industry List',
    actionLink: '/admin/industries',
  }

  return (
    <WebAdminCreateForm
      pathData={pathData}
      document={AdminCreateIndustryDocument}
      navigateTo={'/admin/industry'}
      mutationName={'createIndustry'}
      buttonText={' Industry'}
      fields={industryFields}
      selectFields={industrySelectFields}
    />
  )
}
