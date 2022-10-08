import React from 'react'
import { useAtom } from 'jotai'
import { isDevAtom } from '@biztobiz/web/global/data-access'
import {
  LeaderDeleteTransactionDocument,
  LeaderUpdateTransactionDocument,
  useLeaderTransactionQuery,
} from '@biztobiz/shared/util-sdk'
import { useParams } from 'react-router-dom'
import { cleanDatabaseOutput } from '@biztobiz/shared/utils/feature'
import { transactionFields } from './web-leader-transaction-helper'
import { WebAdminUpdateForm } from '@biztobiz/web-admin/crud-helper'

export function WebLeaderTransactionUpdate() {
  const params = useParams()
  const [isDev] = useAtom(isDevAtom)

  const { data: transaction, loading } = useLeaderTransactionQuery({
    skip: !params?.['id'],
    variables: {
      transactionId: params?.['id'] ?? 'NoId',
    },
  })

  if (!params?.['id']) return <div>No Id</div>

  function defaultValues() {
    if (transaction?.transaction && !loading) {
      return cleanDatabaseOutput(transaction.transaction, transactionFields)
    } else {
      return undefined
    }
  }

  const pathData = {
    path: '/leader/transaction/:id',
    name: 'Edit Transaction',
    description: 'Update the information for this transaction',
    showSearch: false,
    actionText: 'Back to Transactions & Referrals Report',
    actionLink: '/leader/transactions-and-referrals',
  }

  return (
    <WebAdminUpdateForm
      pathData={pathData}
      id={params['id']}
      defaultValues={defaultValues()}
      document={LeaderUpdateTransactionDocument}
      deleteDocument={LeaderDeleteTransactionDocument}
      buttonText={'Transaction'}
      fields={transactionFields}
      idName={'transactionId'}
    />
  )
}
