import React from 'react'
import { LeaderCreateTransactionDocument } from '@biztobiz/shared/util-sdk'
import { transactionFields } from './web-leader-transaction-helper'
import { WebAdminCreateForm } from '@biztobiz/web-admin/crud-helper'

export function WebLeaderTransactionCreate() {
  const pathData = {
    path: '/leader/transactions/new',
    name: 'Create a Transaction',
    description: 'Use the form below to add a new transaction',
    showSearch: false,
    actionText: 'Back to Dashboard',
    actionLink: '/leader/dashboard',
  }

  return (
    <WebAdminCreateForm
      pathData={pathData}
      document={LeaderCreateTransactionDocument}
      navigateTo={'/leader/transaction'}
      mutationName={'createTransaction'}
      buttonText={' Transaction'}
      fields={transactionFields}
    />
  )
}
