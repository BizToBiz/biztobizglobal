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
import dayjs from 'dayjs'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface WebLeaderTransactionReferralReportProps {}

export function WebLeaderTransactionReferralReport(props: WebLeaderTransactionReferralReportProps) {
  const [, setCurrentPath] = useAtom(currentPathAtom)
  const [search] = useAtom(searchAtom)
  const [isDev] = useAtom(isDevAtom)
  const [skip, setSkip] = useState(0)
  const [orderBy, setOrderBy] = useState('createdAt')
  const [orderDirection, setOrderDirection] = useState<'asc' | 'desc'>('desc')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [amount, setAmount] = useState('')

  const variables = {
    input: {
      take: 20,
      skip,
      search,
      orderBy,
      orderDirection,
      startDate: startDate || null,
      endDate: endDate || null,
      amount: amount ? parseFloat(amount) : null,
    },
  }

  const {
    data: transactions,
    error,
    loading,
  } = useLeaderTransactionReferralsQuery({
    variables,
  })

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
    '$ in Biz',
    'Edit Transaction',
    'Referral From',
    'Referral To',
    'First Name',
    'Last Name',
    'Edit Referral',
  ]

  const data = transactions?.transactions

  function setOrder(order: string) {
    console.log('setOrder', order)
    setOrderBy(order)
    setOrderDirection(orderDirection === 'desc' ? 'asc' : 'desc')
  }

  return (
    <>
      Search by Date:{' '}
      <input
        id="startDate"
        type="date"
        className="text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />{' '}
      to{' '}
      <input
        id="endDate"
        type="date"
        className="text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />{' '}
      or by Transaction Amount:{' '}
      <input
        id="amount"
        type="number"
        className="text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      {data ? (
        <>
          <div className="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  {fieldTitles?.map((field, index) => {
                    const name = capitalizeFirstLetter(fieldTitles[index])
                    let sortName: string
                    switch (name) {
                      case 'Transaction Date':
                        sortName = 'transactionDate'
                        break
                      case '$ in Biz':
                        sortName = 'amount'
                        break
                      case 'Referral From':
                        sortName = 'referralFrom'
                        break
                      case 'Referral To':
                        sortName = 'referralTo'
                        break
                      case 'First Name':
                        sortName = 'firstName'
                        break
                      case 'Last Name':
                        sortName = 'lastName'
                        break
                      default:
                        sortName = ''
                    }
                    const nameLink =
                      name !== 'Edit Transaction' && name !== 'Edit Referral' ? (
                        <span
                          className={`flex ${sortName === orderBy ? 'text-blue-800' : ''}`}
                          onClick={() => setOrder(sortName)}
                        >
                          {name}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                            />
                          </svg>
                        </span>
                      ) : (
                        <>{name}</>
                      )

                    switch (index) {
                      case 0:
                        return (
                          <th
                            key={index}
                            scope="col"
                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                          >
                            {name}
                          </th>
                        )
                      case fieldTitles.length - 1:
                        return (
                          <th
                            key={index}
                            scope="col"
                            className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                          >
                            {nameLink}
                          </th>
                        )
                      default:
                        return (
                          <th
                            key={index}
                            scope="col"
                            className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                          >
                            {nameLink}
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
                  const transactionFields: any[] = [dayjs(item?.date).format('MM/DD/YYYY'), item?.amount]
                  const referralFields: any[] = [
                    item?.referral?.from?.name,
                    item?.referral?.to?.name,
                    item?.referral?.firstName,
                    item?.referral?.lastName,
                  ]

                  return (
                    <tr key={item.id}>
                      {transactionFields.map((field, index) => {
                        switch (index) {
                          case 0:
                            return (
                              <td
                                key={index}
                                className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-500 sm:pl-6"
                              >
                                {transactionFields[index]}
                              </td>
                            )
                          default:
                            return (
                              <td
                                key={index}
                                className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell"
                              >
                                {transactionFields[index]}
                              </td>
                            )
                        }
                      })}

                      <td className="whitespace-nowrap py-4 pl-3 pr-4 text-sm font-medium sm:pr-6">
                        <Link to={`/leader/transaction/${item.id}`} className="text-blue-600 hover:text-blue-900">
                          {' '}
                          Edit
                          <span className="sr-only">
                            ,{' '}
                            {typeof item[transactionFields[0] as keyof typeof item] === 'object'
                              ? item[transactionFields[0] as keyof typeof item]?.name
                              : item[transactionFields[0] as keyof typeof item]}
                          </span>
                        </Link>
                      </td>
                      {referralFields.map((field, index) => {
                        const name = capitalizeFirstLetter(fieldTitles[index])
                        let sortName: string
                        switch (name) {
                          case 'Referral From':
                            sortName = 'referralFrom'
                            break
                          case 'Referral To':
                            sortName = 'referralTo'
                            break
                          case 'First Name':
                            sortName = 'firstName'
                            break
                          case 'Last Name':
                            sortName = 'lastName'
                            break
                          default:
                            sortName = ''
                        }
                        const nameLink = (
                          <span onClick={() => setOrder(sortName)}>{capitalizeFirstLetter(fieldTitles[index])}</span>
                        )
                        switch (index) {
                          case 0:
                            return (
                              <td
                                key={index}
                                className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-500 sm:pl-6"
                              >
                                {referralFields[index]}
                              </td>
                            )
                          default:
                            return (
                              <td
                                key={index}
                                className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell"
                              >
                                {referralFields[index]}
                              </td>
                            )
                        }
                      })}
                      <td className="whitespace-nowrap py-4 pl-3 pr-4 text-sm font-medium sm:pr-6">
                        <Link
                          to={`/leader/referral/${item?.referral?.id}`}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          {' '}
                          Edit
                          <span className="sr-only">
                            ,{' '}
                            {typeof item[referralFields[0] as keyof typeof item] === 'object'
                              ? item[referralFields[0] as keyof typeof item]?.name
                              : item[referralFields[0] as keyof typeof item]}
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
                  <span className="font-medium">{pagination?.counters?.count}</span> results with a total transaction
                  amount of <span className="font-medium">${pagination?.counters?.sum?.toFixed()}</span>
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
      )}
    </>
  )
}
