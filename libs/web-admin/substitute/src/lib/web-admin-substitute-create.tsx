import React from 'react'
import { AdminCreateSubstituteDocument } from '@biztobiz/shared/util-sdk'
import { substituteFields } from './web-admin-substitute-helper'
import { WebAdminCreateForm } from '@biztobiz/web-admin/crud-helper'

export function WebAdminSubstituteCreate() {
  const pathData = {
    path: '/admin/substitutes/new',
    name: 'Create a Substitute',
    description: 'Use the form below to add a new Substitute',
    showSearch: false,
    actionText: 'Back to Substitute List',
    actionLink: '/admin/substitutes',
  }

  return (
    <WebAdminCreateForm
      pathData={pathData}
      document={AdminCreateSubstituteDocument}
      navigateTo={'/admin/substitute'}
      mutationName={'createSubstitute'}
      buttonText={' Substitute'}
      fields={substituteFields}
    />
  )
}
