import React, { useLayoutEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { currentPathAtom, isDevAtom, searchAtom } from '@biztobiz/web/global/data-access'
import { WebUiDataTableFeature } from '@biztobiz/web-ui/data-table/feature'
import { WebUiDevDataFeature } from '@biztobiz/web-ui/dev-data/feature'
import { useAdminNotificationsQuery, useAdminNotificationPaginationQuery } from '@biztobiz/shared/util-sdk'
import { RESET } from 'jotai/utils'

interface WebAdminNotificationListProps {
  userId?: string
  chapterId?: string
  referralId?: string
}

export function WebAdminNotificationList(props: WebAdminNotificationListProps) {
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

  const { data: notifications } = useAdminNotificationsQuery({
    variables,
  })

  const { data: pagination } = useAdminNotificationPaginationQuery({
    variables,
  })

  useLayoutEffect(() => {
    setCurrentPath({
      path: '/admin/notifications',
      name: 'Notifications',
      description: 'View and manage all notifications in your organization',
      showSearch: true,
      actionText: 'Add Notification',
      actionLink: '/admin/notification/new',
    })

    return () => {
      setCurrentPath(RESET)
    }
  }, [])

  return (
    <>
      <WebUiDataTableFeature
        data={notifications?.notifications}
        path={'/admin/notification'}
        fields={['name']}
        pagination={pagination?.counters}
        setSkip={setSkip}
      />
      {isDev && notifications?.notifications ? <WebUiDevDataFeature data={notifications} /> : null}
    </>
  )
}
