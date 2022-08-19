import { WebUiFormField } from '@biztobiz/web-ui/form'
import React from 'react'
import { AdminChaptersDocument, AdminUsersDocument } from '@biztobiz/shared/util-sdk'

// TODO: Create custom filter functions
// function regionFilterFunction(regions: Region[]) {
//   return regions?.filter((region) => !region.AttendanceReminder?.id)
// }

export const attendanceReminderFields: WebUiFormField[] = [
  WebUiFormField.relationSelect('chapterId', {
    label: 'Chapter',
    document: AdminChaptersDocument,
    dataType: 'chapters',
  }),
  WebUiFormField.relationSelect('sentById', {
    label: 'Sent By',
    document: AdminUsersDocument,
    dataType: 'users',
  }),
  WebUiFormField.relationSelect('sentToId', {
    label: 'Sent To',
    document: AdminUsersDocument,
    dataType: 'users',
  }),
]
