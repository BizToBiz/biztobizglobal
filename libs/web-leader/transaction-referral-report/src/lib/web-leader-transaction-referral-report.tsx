import { useAtom } from 'jotai'
import { currentPathAtom, isDevAtom, searchAtom } from '@biztobiz/web/global/data-access'
import React, { useLayoutEffect, useState } from 'react'
import { RESET } from 'jotai/utils'
import {
  useLeaderTransactionReferralPaginationQuery,
  useLeaderTransactionReferralsQuery,
} from '@biztobiz/shared/util-sdk'
import { capitalizeFirstLetter, toCount } from '@biztobiz/shared/utils/feature'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import { WebUiDevDataFeature } from '@biztobiz/web-ui/dev-data/feature'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface WebLeaderTransactionReferralReportProps {}

export function WebLeaderTransactionReferralReport(props: WebLeaderTransactionReferralReportProps) {
  const [, setCurrentPath] = useAtom(currentPathAtom)
  const [search] = useAtom(searchAtom)
  const [isDev] = useAtom(isDevAtom)
  const [skip, setSkip] = useState(0)

  const variables = {
    input: {
      take: 20,
      skip,
      search,
    },
  }

  const {
    data: transactions,
    error,
    loading,
  } = useLeaderTransactionReferralsQuery({
    variables,
  })
  console.log({ transactions, error, loading })

  const { data: pagination } = useLeaderTransactionReferralPaginationQuery({
    variables,
  })

  useLayoutEffect(() => {
    setCurrentPath({
      path: '/leader/transaction-referral-report',
      name: 'Transactions & Referrals Report',
      description: 'View and manage all transactions (with referral data) in your organization',
      showSearch: true,
      // actionText: 'Add Referral',
      // actionLink: '/leader/referral/new',
    })

    return () => {
      setCurrentPath(RESET)
    }
  }, [])

  const fieldTitles: string[] = [
    'Transaction Date',
    'Referral From',
    'Referral To',
    'First Name',
    'Last Name',
    '$ in Biz',
  ]

  const data = transactions?.transactions

  return data ? (
    <>
      <div className="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              {fieldTitles?.map((field, index) => {
                switch (index) {
                  case 0:
                    return (
                      <th
                        key={index}
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        {capitalizeFirstLetter(fieldTitles[index])}
                      </th>
                    )
                  case fieldTitles.length - 1:
                    return (
                      <th
                        key={index}
                        scope="col"
                        className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                      >
                        {capitalizeFirstLetter(fieldTitles[index])}
                      </th>
                    )
                  default:
                    return (
                      <th
                        key={index}
                        scope="col"
                        className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                      >
                        {capitalizeFirstLetter(fieldTitles[index])}
                      </th>
                    )
                }
              })}
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {data?.map((item: typeof data[0]) => {
              const fields: string[] = [
                item?.date,
                item?.referral?.from?.name,
                item?.referral?.to?.name,
                item?.referral?.firstName,
                item?.referral?.lastName,
                item?.amount,
              ]
              return (
                <tr key={item.id}>
                  {fields.map((field, index) => {
                    switch (index) {
                      case 0:
                        return (
                          <td key={index} className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-500 sm:pl-6">
                            {fields[index]}
                          </td>
                        )
                      default:
                        return (
                          <td
                            key={index}
                            className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell"
                          >
                            {fields[index]}
                          </td>
                        )
                    }
                  })}

                  <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <Link to={`leader/transaction/${item.id}`} className="text-blue-600 hover:text-blue-900">
                      {' '}
                      Edit
                      <span className="sr-only">
                        ,{' '}
                        {typeof item[fields[0] as keyof typeof item] === 'object'
                          ? item[fields[0] as keyof typeof item]?.name
                          : item[fields[0] as keyof typeof item]}
                      </span>
                    </Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {pagination ? (
        <nav
          className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
          aria-label="Pagination"
        >
          <div className="hidden sm:block">
            <p className="text-sm text-gray-700">
              Showing{' '}
              <span className="font-medium">
                {pagination?.counters?.count === 0 ? 0 : (pagination?.counters?.skip ?? 0) + 1}
              </span>{' '}
              to <span className="font-medium">{toCount(pagination?.counters ?? null)}</span> of{' '}
              <span className="font-medium">{pagination?.counters?.count}</span> results
            </p>
          </div>
          <div className="flex-1 flex justify-between sm:justify-end">
            {(pagination?.counters?.skip ?? 0) > 0 ? (
              <div
                onClick={() => {
                  setSkip?.((pagination?.counters?.skip ?? 0) - (pagination?.counters?.take ?? 0))
                }}
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Previous
              </div>
            ) : null}
            {(pagination?.counters?.skip ?? 0) + (pagination?.counters?.take ?? 0) <
            (pagination?.counters?.count ?? 0) ? (
              <div
                onClick={() => {
                  setSkip?.((pagination?.counters?.skip ?? 0) + (pagination?.counters?.take ?? 0))
                }}
                className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Next
              </div>
            ) : null}
          </div>
        </nav>
      ) : (
        <Skeleton />
      )}
      {isDev && transactions?.transactions ? <WebUiDevDataFeature data={transactions} /> : null}
    </>
  ) : (
    <Skeleton count={5} />
  )
}

export default WebLeaderTransactionReferralReport
