import React from 'react'
import { useAtom } from 'jotai'
import { isDevAtom } from '@biztobiz/web/global/data-access'
import {
  AdminDeleteTransactionDocument,
  AdminUpdateTransactionDocument,
  useAdminTransactionQuery,
} from '@biztobiz/shared/util-sdk'
import { useParams } from 'react-router-dom'
import { cleanDatabaseOutput } from '@biztobiz/shared/utils/feature'
import { transactionFields } from './web-admin-transaction-helper'
import { WebAdminUpdateForm } from '@biztobiz/web-admin/crud-helper'

export function WebAdminTransactionUpdate() {
  const params = useParams()
  const [isDev] = useAtom(isDevAtom)

  const { data: transaction, loading } = useAdminTransactionQuery({
    skip: !params?.['id'],
    variables: {
      transactionId: params?.['id'] ?? 'NoId',
    },
  })

  if (!params?.['id']) return <div>No Id</div>

  function defaultValues() {
    if (transaction?.transaction && !loading) {
      return cleanDatabaseOutput(transaction.transaction, transactionFields, ['name', 'chapter'])
    } else {
      return undefined
    }
  }

  const pathData = {
    path: '/admin/transaction/:id',
    name: 'Edit Transaction',
    description: 'Update the information for this transaction',
    showSearch: false,
    actionText: 'Back to Transaction List',
    actionLink: '/admin/transactions',
  }

  return (
    <WebAdminUpdateForm
      pathData={pathData}
      id={params['id']}
      defaultValues={defaultValues()}
      document={AdminUpdateTransactionDocument}
      deleteDocument={AdminDeleteTransactionDocument}
      buttonText={'Transaction'}
      fields={transactionFields}
      idName={'transactionId'}
    />
  )
}
