import React from 'react'
import { AdminCreateSubstituteGroupDocument } from '@biztobiz/shared/util-sdk'
import { substituteGroupFields, substituteGroupSelectFields } from './web-admin-substitute-group-helper'
import { WebAdminCreateForm } from '@biztobiz/web-admin/crud-helper'

export function WebAdminSubstituteGroupCreate() {
  const pathData = {
    path: '/admin/substitute-groups/new',
    name: 'Create a SubstituteGroup',
    description: 'Use the form below to add a new SubstituteGroup',
    showSearch: false,
    actionText: 'Back to SubstituteGroup List',
    actionLink: '/admin/substitute-groups',
  }

  return (
    <WebAdminCreateForm
      pathData={pathData}
      document={AdminCreateSubstituteGroupDocument}
      navigateTo={'/admin/substitute-group'}
      mutationName={'createSubstituteGroup'}
      buttonText={' SubstituteGroup'}
      fields={substituteGroupFields}
      selectFields={substituteGroupSelectFields}
    />
  )
}
