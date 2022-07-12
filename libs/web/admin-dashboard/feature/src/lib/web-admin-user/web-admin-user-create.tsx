import React, { useLayoutEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { currentPathAtom } from '@biztobiz/web/global/data-access'
import { RESET } from 'jotai/utils'
import { WebUiForm } from '@biztobiz/web-ui/form'
import { AdminCreateUserInput, useAdminCreateUserMutation } from '@biztobiz/shared/util-sdk'
import { userFields } from './web-admin-user-helper'

export function WebAdminUserCreate() {
  const [currentPath, setCurrentPath] = useAtom(currentPathAtom)
  const [loading, setLoading] = useState(false)

  const [createMember] = useAdminCreateUserMutation()

  const submit = async (input: AdminCreateUserInput) => {
    setLoading(true)
    await createMember({
      variables: {
        input,
      },
    })
    setLoading(false)
  }

  useLayoutEffect(() => {
    setCurrentPath({
      path: '/admin/members/new',
      name: 'Create a Member',
      description: 'Use the form below to add a new Member',
      showSearch: false,
      actionText: 'Back to Member List',
      actionLink: '/admin/members',
    })

    return () => {
      setCurrentPath(RESET)
    }
  }, [])

  return (
    <WebUiForm
      fields={userFields}
      submit={(values) => submit(values as AdminCreateUserInput)}
      defaultValues={undefined}
      buttonText={'Create Member'}
      loading={loading}
    />
  )
}
