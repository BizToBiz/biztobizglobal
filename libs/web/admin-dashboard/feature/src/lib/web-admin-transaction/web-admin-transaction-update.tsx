import React from 'react'
import { AdminUpdateTransactionDocument, useAdminTransactionQuery } from '@biztobiz/shared/util-sdk'
import { useParams } from 'react-router-dom'
import { cleanObject } from '@biztobiz/shared/utils/feature'
import { WebAdminUpdateForm } from '../web-admin-helper/web-admin-update-form'
import { transactionFields } from './web-admin-transaction-helper'
import { mapChapter, mapUser } from '../web-admin-helper/web-admin-helper'
import { WebUiDevDataFeature } from '@biztobiz/web-ui/dev-data/feature'
import { useAtom } from 'jotai'
import { isDevAtom } from '@biztobiz/web/global/data-access'

export function WebAdminTransactionUpdate() {
  const params = useParams()
  const [isDev] = useAtom(isDevAtom)

  const { data: transaction } = useAdminTransactionQuery({
    skip: !params?.['id'],
    variables: {
      transactionId: params?.['id'] ?? 'NoTransactionId',
    },
  })

  if (!params?.['id']) {
    return <div>No Id</div>
  }

  function defaultValues() {
    if (transaction?.transaction) {
      const transactionValue = cleanObject(transaction.transaction)
      if (transaction?.transaction?.user?.id) {
        transactionValue['userId'] = mapUser(transaction?.transaction?.user)
        delete transactionValue['user']
      }
      if (transaction?.transaction?.chapter?.id) {
        transactionValue['chapterId'] = mapChapter(transaction?.transaction?.chapter)
        delete transactionValue['chapter']
      }
      return transactionValue
    } else {
      return undefined
    }
  }

  const pathData = {
    path: '/admin/transactions/:id',
    name: 'Edit Transaction',
    description: 'Update the information for this transaction',
    showSearch: false,
    actionText: 'Back to Transaction List',
    actionLink: '/admin/transactions',
  }

  return (
    <>
      <WebAdminUpdateForm
        pathData={pathData}
        id={params?.['id']}
        defaultValues={defaultValues()}
        document={AdminUpdateTransactionDocument}
        buttonText={'Update Transaction'}
        fields={transactionFields}
        idName={'transactionId'}
      />
      {isDev ? <WebUiDevDataFeature data={defaultValues()} /> : null}
    </>
  )
}
