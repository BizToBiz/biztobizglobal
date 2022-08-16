import React from 'react'
import { AdminCreateTransactionDocument } from '@biztobiz/shared/util-sdk'
import { WebAdminCreateForm } from '@biztobiz/web-admin/crud-helper'
import { transactionFields } from './web-admin-transaction-helper'

export function WebAdminTransactionCreate() {
  const pathData = {
    path: '/admin/transactions/new',
    name: 'Create a Transaction',
    description: 'Use the form below to add a new transaction',
    showSearch: false,
    actionText: 'Back to Transaction List',
    actionLink: '/admin/transactions',
  }

  return (
    <WebAdminCreateForm
      pathData={pathData}
      document={AdminCreateTransactionDocument}
      navigateTo={'/admin/transaction'}
      mutationName={'createTransaction'}
      buttonText={' Transaction'}
      fields={transactionFields}
    />
  )
}
