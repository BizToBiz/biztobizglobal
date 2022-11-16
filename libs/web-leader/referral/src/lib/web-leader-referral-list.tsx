import React, { useLayoutEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { currentPathAtom, isDevAtom, searchAtom } from '@biztobiz/web/global/data-access'
import { WebUiDataTableFeature } from '@biztobiz/web-ui/data-table/feature'
import { WebUiDevDataFeature } from '@biztobiz/web-ui/dev-data/feature'
import { useLeaderReferralPaginationQuery, useLeaderReferralsQuery } from '@biztobiz/shared/util-sdk'
import { RESET } from 'jotai/utils'

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

  return (
    <>
      <WebUiDataTableFeature
        data={referrals?.referrals}
        path={'/leader/referral'}
        fields={['from', 'to', 'firstName', 'lastName']}
        pagination={pagination?.counters}
        setSkip={setSkip}
      />
      {isDev && referrals?.referrals ? <WebUiDevDataFeature data={referrals} /> : null}
    </>
  )
}