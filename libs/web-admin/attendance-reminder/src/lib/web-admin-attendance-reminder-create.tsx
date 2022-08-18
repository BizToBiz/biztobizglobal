import React from 'react'
import { AdminCreateAttendanceReminderDocument } from '@biztobiz/shared/util-sdk'
import { attendanceReminderFields, attendanceReminderSelectFields } from './web-admin-attendance-reminder-helper'
import { WebAdminCreateForm } from '@biztobiz/web-admin/crud-helper'

export function WebAdminAttendanceReminderCreate() {
  const pathData = {
    path: '/admin/attendance-reminders/new',
    name: 'Create a AttendanceReminder',
    description: 'Use the form below to add a new AttendanceReminder',
    showSearch: false,
    actionText: 'Back to AttendanceReminder List',
    actionLink: '/admin/attendance-reminders',
  }

  return (
    <WebAdminCreateForm
      pathData={pathData}
      document={AdminCreateAttendanceReminderDocument}
      navigateTo={'/admin/attendance-reminder'}
      mutationName={'createAttendanceReminder'}
      buttonText={' AttendanceReminder'}
      fields={attendanceReminderFields}
      selectFields={attendanceReminderSelectFields}
    />
  )
}
