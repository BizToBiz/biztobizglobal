import { WebUiFormField } from '@biztobiz/web-ui/form'
import React from 'react'
import { AdminMeetingsDocument, AdminUsersDocument } from '@biztobiz/shared/util-sdk'

// TODO: Create custom filter functions
// function regionFilterFunction(regions: Region[]) {
//   return regions?.filter((region) => !region.Substitute?.id)
// }

export const substituteFields: WebUiFormField[] = [
  WebUiFormField.relationSelect('meetingId', {
    label: 'Meeting',
    document: AdminMeetingsDocument,
    dataType: 'meetings',
  }),
  WebUiFormField.relationSelect('invited', {
    label: 'Invited',
    dataType: 'users',
    document: AdminUsersDocument,
    multi: true,
  }),
  WebUiFormField.relationSelect('sentById', { label: 'Sent By', dataType: 'users', document: AdminUsersDocument }),
  WebUiFormField.relationSelect('substituteId', {
    label: 'Substitute',
    dataType: 'users',
    document: AdminUsersDocument,
  }),
]
