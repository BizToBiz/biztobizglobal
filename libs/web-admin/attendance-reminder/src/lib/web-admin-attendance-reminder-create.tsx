import React from 'react'
import { WebAdminCreateForm } from '@biztobiz/web-admin/crud-helper'
import { AdminCreateAttendanceReminderDocument } from '@biztobiz/shared/util-sdk'
import { attendanceReminderFields } from './web-admin-attendance-reminder-helper'

export function WebAdminAttendanceReminderCreate() {
  const pathData = {
    path: '/admin/attendance-reminders/new',
    name: 'Create an Attendance Reminder',
    description: 'Use the form below to add a new Attendance Reminder',
    showSearch: false,
    actionText: 'Back to Attendance Reminder List',
    actionLink: '/admin/attendance-reminders',
  }

  return (
    <WebAdminCreateForm
      pathData={pathData}
      document={AdminCreateAttendanceReminderDocument}
      navigateTo={'/admin/attendance-reminder'}
      mutationName={'createAttendanceReminder'}
      buttonText={' Attendance Reminder'}
      fields={attendanceReminderFields}
    />
  )
}
