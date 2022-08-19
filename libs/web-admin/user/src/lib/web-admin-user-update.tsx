import React from 'react'
import { useAtom } from 'jotai'
import { isDevAtom } from '@biztobiz/web/global/data-access'
import { AdminDeleteUserDocument, AdminUpdateUserDocument, useAdminUserQuery } from '@biztobiz/shared/util-sdk'
import { useParams } from 'react-router-dom'
import { cleanDatabaseOutput } from '@biztobiz/shared/utils/feature'
import { userFields } from './web-admin-user-helper'
import { WebAdminUpdateForm } from '@biztobiz/web-admin/crud-helper'

export function WebAdminUserUpdate() {
  const params = useParams()
  const [isDev] = useAtom(isDevAtom)

  const { data: user, loading } = useAdminUserQuery({
    skip: !params?.['id'],
    variables: {
      userId: params?.['id'] ?? 'NoId',
    },
  })

  if (!params?.['id']) return <div>No Id</div>

  function defaultValues() {
    if (user?.user && !loading) {
      return cleanDatabaseOutput(user.user, userFields)
    } else {
      return undefined
    }
  }

  const pathData = {
    path: '/admin/user/:id',
    name: 'Edit User',
    description: 'Update the information for this user',
    showSearch: false,
    actionText: 'Back to User List',
    actionLink: '/admin/users',
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
