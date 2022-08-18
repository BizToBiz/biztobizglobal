import React, { useLayoutEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { currentPathAtom, isDevAtom, searchAtom } from '@biztobiz/web/global/data-access'
import { WebUiDataTableFeature } from '@biztobiz/web-ui/data-table/feature'
import { WebUiDevDataFeature } from '@biztobiz/web-ui/dev-data/feature'
import { useAdminAttendanceReminderPaginationQuery, useAdminAttendanceRemindersQuery } from '@biztobiz/shared/util-sdk'
import { RESET } from 'jotai/utils'

interface WebAdminAttendanceReminderListProps {
  userId?: string
  chapterId?: string
  referralId?: string
}

export function WebAdminAttendanceReminderList(props: WebAdminAttendanceReminderListProps) {
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

  const { data: attendanceReminders } = useAdminAttendanceRemindersQuery({
    variables,
  })

  const { data: pagination } = useAdminAttendanceReminderPaginationQuery({
    variables,
  })

  useLayoutEffect(() => {
    setCurrentPath({
      path: '/admin/attendance-reminders',
      name: 'AttendanceReminders',
      description: 'View and manage all attendance reminders in your organization',
      showSearch: true,
      actionText: 'Add AttendanceReminder',
      actionLink: '/admin/attendance-reminder/new',
    })

    return () => {
      setCurrentPath(RESET)
    }
  }, [])

  return (
    <>
      <WebUiDataTableFeature
        data={attendanceReminders?.attendanceReminders}
        path={'/admin/attendance-reminder'}
        fields={['name']}
        pagination={pagination?.counters}
        setSkip={setSkip}
      />
      {isDev && attendanceReminders?.attendanceReminders ? <WebUiDevDataFeature data={attendanceReminders} /> : null}
    </>
  )
}
