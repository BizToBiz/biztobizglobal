import React, { useLayoutEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { currentPathAtom, isDevAtom, searchAtom } from '@biztobiz/web/global/data-access'
import { WebUiDataTableFeature } from '@biztobiz/web-ui/data-table/feature'
import { WebUiDevDataFeature } from '@biztobiz/web-ui/dev-data/feature'
import { Referral, useLeaderReferralPaginationQuery, useLeaderReferralsQuery } from '@biztobiz/shared/util-sdk'
import { RESET } from 'jotai/utils'
import dayjs from 'dayjs'

interface WebLeaderReferralListProps {
  userId?: string
  chapterId?: string
  referralId?: string
}

export function WebLeaderReferralList(props: WebLeaderReferralListProps) {
  const [, setCurrentPath] = useAtom(currentPathAtom)
  const [search] = useAtom(searchAtom)
  const [isDev] = useAtom(isDevAtom)
  const [skip, setSkip] = useState(0)
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const variables = {
    input: {
      take: 20,
      userId: props?.userId,
      chapterId: props?.chapterId,
      referralId: props?.referralId,
      startDate: startDate || null,
      endDate: endDate || null,
      skip,
      search,
    },
  }

  const { data: referrals } = useLeaderReferralsQuery({
    variables,
  })

  const { data: pagination } = useLeaderReferralPaginationQuery({
    variables,
  })

  useLayoutEffect(() => {
    setCurrentPath({
      path: '/leader/referrals',
      name: 'Referrals',
      description: 'View and manage all referrals in your organization',
      showSearch: true,
      actionText: 'Add Referral',
      actionLink: '/leader/referral/new',
    })

    return () => {
      setCurrentPath(RESET)
    }
  }, [])

  const originalData: Referral[] = referrals?.referrals

  const cleanData = originalData?.map((referral) => {
    return { ...referral, referralDate: dayjs(referral.referralDate).format('MM/DD/YYYY') }
  })

  const additionalFilters = (
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
      />
    </>
  )

  return (
    <>
      <WebUiDataTableFeature
        data={cleanData}
        path={'/leader/referral'}
        fields={['referralDate', 'from', 'to', 'firstName', 'lastName']}
        pagination={pagination?.counters}
        setSkip={setSkip}
        additionalFilters={additionalFilters}
      />
      {isDev && referrals?.referrals ? <WebUiDevDataFeature data={referrals} /> : null}
    </>
  )
}
