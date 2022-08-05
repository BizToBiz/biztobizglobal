import React, { useLayoutEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { currentPathAtom, isDevAtom, searchAtom } from '@biztobiz/web/global/data-access'
import { WebUiDataTableFeature } from '@biztobiz/web-ui/data-table/feature'
import { WebUiDevDataFeature } from '@biztobiz/web-ui/dev-data/feature'
import { useAdminTransactionPaginationQuery, useAdminTransactionsQuery } from '@biztobiz/shared/util-sdk'
import { RESET } from 'jotai/utils'

interface WebAdminTransactionListProps {
  userId?: string
  chapterId?: string
  referralId?: string
}

export function WebAdminTransactionList(props: WebAdminTransactionListProps) {
  const [, setCurrentPath] = useAtom(currentPathAtom)
  const [search] = useAtom(searchAtom)
  const [isDev] = useAtom(isDevAtom)
  const [skip, setSkip] = useState(0)

  const variables = {
    input: {
      take: 20,
      userId: props?.userId,
      chapterId: props?.chapterId,
      referralId: props?.referralId,
      skip,
      search,
    },
  }

  const { data: transactions } = useAdminTransactionsQuery({
    variables,
  })

  const { data: pagination } = useAdminTransactionPaginationQuery({
    variables,
  })

  useLayoutEffect(() => {
    setCurrentPath({
      path: '/admin/transactions',
      name: 'Transactions',
      description: 'View and manage all transactions in your organization',
      showSearch: true,
      actionText: 'Add Transaction',
      actionLink: '/admin/transaction/new',
    })

    return () => {
      setCurrentPath(RESET)
    }
  }, [])

  return (
    <>
      <WebUiDataTableFeature
        data={transactions?.transactions}
        path={'/admin/transaction'}
        fields={['date', 'amount', 'enteredBy']}
        pagination={pagination?.counters}
        setSkip={setSkip}
      />
      {isDev && transactions?.transactions ? <WebUiDevDataFeature data={transactions} /> : null}
    </>
  )
}
