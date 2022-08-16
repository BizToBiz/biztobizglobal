import React from 'react'
import { AdminCreateUserDocument } from '@biztobiz/shared/util-sdk'
import { userFields } from './web-admin-user-helper'
import { WebAdminCreateForm } from '@biztobiz/web-admin/crud-helper'

export function WebAdminUserCreate() {
  const pathData = {
    path: '/admin/users/new',
    name: 'Create a User',
    description: 'Use the form below to add a new User',
    showSearch: false,
    actionText: 'Back to User List',
    actionLink: '/admin/users',
  }

  return (
    <WebAdminCreateForm
      fields={userFields}
      buttonText={' User'}
      document={AdminCreateUserDocument}
      navigateTo={'/admin/user'}
      pathData={pathData}
      mutationName={'createUser'}
    />
  )
}
