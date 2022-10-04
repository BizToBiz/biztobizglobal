import React, { useLayoutEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { currentPathAtom, isDevAtom, searchAtom } from '@biztobiz/web/global/data-access'
import { WebUiDataTableFeature } from '@biztobiz/web-ui/data-table/feature'
import { WebUiDevDataFeature } from '@biztobiz/web-ui/dev-data/feature'
import { useAdminMeetingsQuery, useAdminMeetingPaginationQuery } from '@biztobiz/shared/util-sdk'
import { RESET } from 'jotai/utils'

interface WebAdminMeetingListProps {
  userId?: string
  chapterId?: string
  referralId?: string
}

export function WebAdminMeetingList(props: WebAdminMeetingListProps) {
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

  const { data: meetings } = useAdminMeetingsQuery({
    variables,
  })

  const { data: pagination } = useAdminMeetingPaginationQuery({
    variables,
  })

  useLayoutEffect(() => {
    setCurrentPath({
      path: '/admin/meetings',
      name: 'Meetings',
      description: 'View and manage all meetings in your organization',
      showSearch: true,
      actionText: 'Add Meeting',
      actionLink: '/admin/meeting/new',
    })

    return () => {
      setCurrentPath(RESET)
    }
  }, [])

  return (
    <>
      <WebUiDataTableFeature
        data={meetings?.meetings}
        path={'/admin/meeting'}
        fields={['name']}
        pagination={pagination?.counters}
        setSkip={setSkip}
      />
      {isDev && meetings?.meetings ? <WebUiDevDataFeature data={meetings} /> : null}
    </>
  )
}
