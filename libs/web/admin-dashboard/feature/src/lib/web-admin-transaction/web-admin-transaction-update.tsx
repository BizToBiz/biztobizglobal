import React, { useLayoutEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { currentPathAtom, isDevAtom } from '@biztobiz/web/global/data-access'
import {
  AdminUpdateTransactionInput,
  useAdminTransactionQuery,
  useAdminUpdateTransactionMutation,
} from '@biztobiz/shared/util-sdk'
import { RESET } from 'jotai/utils'
import { useParams } from 'react-router-dom'
import { WebUiForm } from '@biztobiz/web-ui/form'
import { transactionFields } from './web-admin-transaction-helper'
import { cleanObject } from '@biztobiz/shared/utils/feature'
import { WebUiDevDataFeature } from '@biztobiz/web-ui/dev-data/feature'

export function WebAdminTransactionUpdate() {
  const [isDev] = useAtom(isDevAtom)
  const params = useParams()
  const [, setCurrentPath] = useAtom(currentPathAtom)
  const [loading, setLoading] = useState(false)

  const [updateTransaction] = useAdminUpdateTransactionMutation()

  const { data: transaction } = useAdminTransactionQuery({
    skip: !params?.['id'],
    variables: {
      transactionId: params?.['id'] ?? 'NoTransactionId',
    },
  })

  const submit = async (input: AdminUpdateTransactionInput) => {
    setLoading(true)
    const cleanedInput = cleanObject(input)
    await updateTransaction({
      variables: {
        transactionId: params?.['id'] ?? 'NoTransactionId',
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
      path: '/admin/transactions/:id',
      name: 'Edit Transaction',
      description: 'Update the information for this transaction',
      showSearch: false,
      actionText: 'Back to Transaction List',
      actionLink: '/admin/transactions',
    })

    return () => {
      setCurrentPath(RESET)
    }
  }, [])

  function defaultValues() {
    if (transaction?.transaction) {
      const transactionValue = cleanObject(transaction.transaction)
      transactionValue['userId'] = {
        label: `${transaction?.transaction?.user?.firstName} ${transaction?.transaction?.user?.lastName}`,
        value: transaction?.transaction?.user?.id,
      }
      return transactionValue
    } else {
      return undefined
    }
  }
  return (
    <>
      <WebUiForm
        fields={transactionFields}
        submit={(values) => submit(values as AdminUpdateTransactionInput)}
        defaultValues={defaultValues()}
        buttonText={'Update Transaction'}
        loading={loading}
      />
      {isDev ? <WebUiDevDataFeature data={defaultValues()} /> : null}
    </>
  )
}
