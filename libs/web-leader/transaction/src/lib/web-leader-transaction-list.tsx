import React, { useLayoutEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { currentPathAtom, isDevAtom, searchAtom } from '@biztobiz/web/global/data-access'
import { WebUiDataTableFeature } from '@biztobiz/web-ui/data-table/feature'
import { WebUiDevDataFeature } from '@biztobiz/web-ui/dev-data/feature'
import { useLeaderTransactionPaginationQuery, useLeaderTransactionsQuery } from '@biztobiz/shared/util-sdk'
import { RESET } from 'jotai/utils'

interface WebLeaderTransactionListProps {
  userId?: string
  chapterId?: string
  referralId?: string
}

export function WebLeaderTransactionList(props: WebLeaderTransactionListProps) {
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

  const { data: transactions } = useLeaderTransactionsQuery({
    variables,
  })

  const { data: pagination } = useLeaderTransactionPaginationQuery({
    variables,
  })

  useLayoutEffect(() => {
    setCurrentPath({
      path: '/leader/transactions',
      name: 'Transactions',
      description: 'View and manage all transactions in your organization',
      showSearch: true,
      actionText: 'Add Transaction',
      actionLink: '/leader/transaction/new',
    })

    return () => {
      setCurrentPath(RESET)
    }
  }, [])

  return (
    <>
      <WebUiDataTableFeature
        data={transactions?.transactions}
        path={'/leader/transaction'}
        fields={['id', 'amount', 'date']}
        pagination={pagination?.counters}
        setSkip={setSkip}
      />
      {isDev && transactions?.transactions ? <WebUiDevDataFeature data={transactions} /> : null}
    </>
  )
}
