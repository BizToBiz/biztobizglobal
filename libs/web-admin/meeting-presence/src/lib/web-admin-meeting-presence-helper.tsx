import { WebUiFormField } from '@biztobiz/web-ui/form'
import React from 'react'
import { AdminMeetingsDocument, AdminUsersDocument, MeetingAttendance } from '@biztobiz/shared/util-sdk'

// TODO: Create custom filter functions
// function regionFilterFunction(regions: Region[]) {
//   return regions?.filter((region) => !region.MeetingPresence?.id)
// }

export const meetingPresenceFields: WebUiFormField[] = [
  WebUiFormField.enumSelect('attendance', { label: 'Attendance Status', enum: MeetingAttendance }),
  WebUiFormField.relationSelect('meetingId', {
    label: 'Meeting',
    document: AdminMeetingsDocument,
    dataType: 'meetings',
  }),
  WebUiFormField.relationSelect('memberId', { label: 'Member', document: AdminUsersDocument, dataType: 'users' }),
]
