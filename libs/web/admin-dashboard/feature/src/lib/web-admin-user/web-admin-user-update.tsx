import React from 'react'
import { AdminDeleteUserDocument, AdminUpdateUserDocument, useAdminUserQuery } from '@biztobiz/shared/util-sdk'
import { useParams } from 'react-router-dom'
import { cleanFormInput } from '@biztobiz/shared/utils/feature'
import { WebAdminUpdateForm } from '../web-admin-helper/web-admin-update-form'
import { userFields } from './web-admin-user-helper'

export function WebAdminUserUpdate() {
  const params = useParams()

  const { data: user } = useAdminUserQuery({
    skip: !params?.['id'],
    variables: {
      userId: params?.['id'] ?? 'NoId',
    },
  })

  if (!params?.['id']) {
    return <div>No Id</div>
  }

  function defaultValues() {
    if (user?.user) {
      return cleanFormInput({
        ...user.user,
      })
    } else {
      return undefined
    }
  }

  const pathData = {
    path: '/admin/users/:id',
    name: 'Edit User',
    description: 'Update the information for this user',
    showSearch: false,
    actionText: 'Back to User List',
    actionLink: '/admin/user',
  }

  return (
    <WebAdminUpdateForm
      pathData={pathData}
      id={params['id']}
      defaultValues={defaultValues()}
      document={AdminUpdateUserDocument}
      deleteDocument={AdminDeleteUserDocument}
      buttonText={'User'}
      fields={userFields}
      idName={'userId'}
    />
  )
}
