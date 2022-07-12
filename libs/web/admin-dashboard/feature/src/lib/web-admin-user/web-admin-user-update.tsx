import React, { useLayoutEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { currentPathAtom } from '@biztobiz/web/global/data-access'
import { AdminUpdateUserInput, useAdminUpdateUserMutation, useAdminUserQuery } from '@biztobiz/shared/util-sdk'
import { RESET } from 'jotai/utils'
import { useParams } from 'react-router-dom'
import { WebUiForm } from '@biztobiz/web-ui/form'
import { userFields } from './web-admin-user-helper'
import { cleanObject } from '@biztobiz/shared/utils/feature'

export function WebAdminUserUpdate() {
  const params = useParams()
  const [, setCurrentPath] = useAtom(currentPathAtom)
  const [loading, setLoading] = useState(false)

  const [updateUser] = useAdminUpdateUserMutation()

  const { data: user } = useAdminUserQuery({
    skip: !params?.['id'],
    variables: {
      userId: params?.['id'] ?? 'NoUserId',
    },
  })

  const submit = async (input: AdminUpdateUserInput) => {
    setLoading(true)
    const cleanedInput = cleanObject(input)
    await updateUser({
      variables: {
        userId: params?.['id'] ?? 'NoUserId',
        input: {
          ...cleanedInput,
        },
      },
    })
    setLoading(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useLayoutEffect(() => {
    setCurrentPath({
      path: '/admin/users/:id',
      name: 'Edit User',
      description: 'Update the information for this user',
      showSearch: false,
      actionText: 'Back to User List',
      actionLink: '/admin/users',
    })

    return () => {
      setCurrentPath(RESET)
    }
  }, [])

  function defaultValues() {
    if (user?.user) {
      return cleanObject({
        ...user.user,
      })
    } else {
      return undefined
    }
  }
  return (
    <WebUiForm
      fields={userFields}
      submit={(values) => submit(values as AdminUpdateUserInput)}
      defaultValues={defaultValues()}
      buttonText={'Update User'}
      loading={loading}
    />
  )
}
