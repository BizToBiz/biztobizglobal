import React from 'react'
import { useAtom } from 'jotai'
import { isDevAtom } from '@biztobiz/web/global/data-access'
import {
  AdminDeleteAttendanceReminderDocument,
  AdminUpdateAttendanceReminderDocument,
  useAdminAttendanceReminderQuery,
} from '@biztobiz/shared/util-sdk'
import { useParams } from 'react-router-dom'
import { cleanDatabaseOutput } from '@biztobiz/shared/utils/feature'
import { attendanceReminderFields } from './web-admin-attendance-reminder-helper'
import { WebAdminUpdateForm } from '@biztobiz/web-admin/crud-helper'

export function WebAdminAttendanceReminderUpdate() {
  const params = useParams()
  const [isDev] = useAtom(isDevAtom)

  const { data: attendanceReminder, loading } = useAdminAttendanceReminderQuery({
    skip: !params?.['id'],
    variables: {
      attendanceReminderId: params?.['id'] ?? 'NoId',
    },
  })

  if (!params?.['id']) return <div>No Id</div>

  function defaultValues() {
    if (attendanceReminder?.attendanceReminder && !loading) {
      return cleanDatabaseOutput(attendanceReminder.attendanceReminder, attendanceReminderFields, ['name'])
    } else {
      return undefined
    }
  }

  const pathData = {
    path: '/admin/attendance-reminder/:id',
    name: 'Edit Attendance Reminder',
    description: 'Update the information for this attendance reminder',
    showSearch: false,
    actionText: 'Back to Attendance Reminder List',
    actionLink: '/admin/attendance-reminders',
  }

  return (
    <WebAdminUpdateForm
      pathData={pathData}
      id={params['id']}
      defaultValues={defaultValues()}
      document={AdminUpdateAttendanceReminderDocument}
      deleteDocument={AdminDeleteAttendanceReminderDocument}
      buttonText={'Attendance Reminder'}
      fields={attendanceReminderFields}
      idName={'attendanceReminderId'}
    />
  )
}
