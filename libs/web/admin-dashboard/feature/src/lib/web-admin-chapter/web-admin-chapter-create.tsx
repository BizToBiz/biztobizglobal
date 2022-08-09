import React from 'react'
import { AdminCreateCompanyDocument } from '@biztobiz/shared/util-sdk'
import { WebAdminCreateForm } from '../web-admin-helper/web-admin-create-form'
import { companyFields } from '../web-admin-company/web-admin-company-helper'

export function WebAdminChapterCreate() {
  const pathData = {
    path: '/admin/chapters/new',
    name: 'Create a Chapter',
    description: 'Use the form below to add a new chapter',
    showSearch: false,
    actionText: 'Back to Chapter List',
    actionLink: '/admin/chapters',
  }

  return (
    <WebAdminCreateForm
      pathData={pathData}
      document={AdminCreateCompanyDocument}
      navigateTo={'/admin/company'}
      mutationName={'createChapter'}
      buttonText={' Chapter'}
      fields={companyFields}
    />
  )
}
