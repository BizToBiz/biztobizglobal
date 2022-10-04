import React, { useLayoutEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { currentPathAtom, isDevAtom, searchAtom } from '@biztobiz/web/global/data-access'
import { WebUiDataTableFeature } from '@biztobiz/web-ui/data-table/feature'
import { WebUiDevDataFeature } from '@biztobiz/web-ui/dev-data/feature'
import { useAdminPowerHourPaginationQuery, useAdminPowerHoursQuery } from '@biztobiz/shared/util-sdk'
import { RESET } from 'jotai/utils'

interface WebAdminPowerHourListProps {
  userId?: string
  chapterId?: string
  referralId?: string
}

export function WebAdminPowerHourList(props: WebAdminPowerHourListProps) {
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

  const { data: powerHours } = useAdminPowerHoursQuery({
    variables,
  })

  const { data: pagination } = useAdminPowerHourPaginationQuery({
    variables,
  })

  useLayoutEffect(() => {
    setCurrentPath({
      path: '/admin/power-hours',
      name: 'Power Hours',
      description: 'View and manage all Power Hours in your organization',
      showSearch: true,
      actionText: 'Add Power Hour',
      actionLink: '/admin/power-hour/new',
    })

    return () => {
      setCurrentPath(RESET)
    }
  }, [])

  return (
    <>
      <WebUiDataTableFeature
        data={powerHours?.powerHours}
        path={'/admin/power-hour'}
        fields={['date', 'details']}
        pagination={pagination?.counters}
        setSkip={setSkip}
      />
      {isDev && powerHours?.powerHours ? <WebUiDevDataFeature data={powerHours} /> : null}
    </>
  )
}
