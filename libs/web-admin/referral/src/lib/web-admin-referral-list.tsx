import React, { useLayoutEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { currentPathAtom, isDevAtom, searchAtom } from '@biztobiz/web/global/data-access'
import { WebUiDataTableFeature } from '@biztobiz/web-ui/data-table/feature'
import { WebUiDevDataFeature } from '@biztobiz/web-ui/dev-data/feature'
import { useAdminReferralsQuery, useAdminReferralPaginationQuery } from '@biztobiz/shared/util-sdk'
import { RESET } from 'jotai/utils'

interface WebAdminReferralListProps {
  userId?: string
  chapterId?: string
  referralId?: string
}

export function WebAdminReferralList(props: WebAdminReferralListProps) {
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

  const { data: referrals } = useAdminReferralsQuery({
    variables,
  })

  const { data: pagination } = useAdminReferralPaginationQuery({
    variables,
  })

  useLayoutEffect(() => {
    setCurrentPath({
      path: '/admin/referrals',
      name: 'Referrals',
      description: 'View and manage all referrals in your organization',
      showSearch: true,
      actionText: 'Add Referral',
      actionLink: '/admin/referral/new',
    })

    return () => {
      setCurrentPath(RESET)
    }
  }, [])

  return (
    <>
      <WebUiDataTableFeature
        data={referrals?.referrals}
        path={'/admin/referral'}
        fields={['name']}
        pagination={pagination?.counters}
        setSkip={setSkip}
      />
      {isDev && referrals?.referrals ? <WebUiDevDataFeature data={referrals} /> : null}
    </>
  )
}
