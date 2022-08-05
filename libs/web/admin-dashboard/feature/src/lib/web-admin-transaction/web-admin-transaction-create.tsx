import React, { useLayoutEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { currentPathAtom } from '@biztobiz/web/global/data-access'
import { AdminCreateTransactionInput, useAdminCreateTransactionMutation } from '@biztobiz/shared/util-sdk'
import { RESET } from 'jotai/utils'
import { WebUiForm } from '@biztobiz/web-ui/form'
import { transactionFields } from './web-admin-transaction-helper'
import { cleanObject } from '@biztobiz/shared/utils/feature'

export function WebAdminTransactionCreate() {
  const [currentPath, setCurrentPath] = useAtom(currentPathAtom)
  const [loading, setLoading] = useState(false)

  const [createTransaction] = useAdminCreateTransactionMutation()

  const submit = async (input: AdminCreateTransactionInput) => {
    setLoading(true)
    const cleanedInput = cleanObject(input)
    await createTransaction({
      variables: {
        input: { ...cleanedInput },
      },
    })
    setLoading(false)
  }

  useLayoutEffect(() => {
    setCurrentPath({
      path: '/admin/transactions/new',
      name: 'Create a Transaction',
      description: 'Use the form below to add a new transaction',
      showSearch: false,
      actionText: 'Back to Transaction List',
      actionLink: '/admin/transactions',
    })

    return () => {
      setCurrentPath(RESET)
    }
  }, [])

  return (
    <WebUiForm
      fields={transactionFields}
      submit={(values) => submit(values as AdminCreateTransactionInput)}
      defaultValues={undefined}
      buttonText={'Create Transaction'}
      loading={loading}
    />
  )
}
