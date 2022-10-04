import { WebUiFormField } from '@biztobiz/web-ui/form'
import React from 'react'
import { AdminUsersDocument, PowerHourStatus } from '@biztobiz/shared/util-sdk'

// TODO: Create custom filter functions
// function regionFilterFunction(regions: Region[]) {
//   return regions?.filter((region) => !region.PowerHour?.id)
// }

export const powerHourFields: WebUiFormField[] = [
  WebUiFormField.datePicker('date', { label: 'Date' }),
  WebUiFormField.input('time', { label: 'Time' }),
  WebUiFormField.input('details', { label: 'Details' }),
  WebUiFormField.enumSelect('status', { label: 'Power Hour Status', enum: PowerHourStatus }),
  WebUiFormField.relationSelect('fromId', { label: 'From', document: AdminUsersDocument, dataType: 'users' }),
  WebUiFormField.relationSelect('toId', { label: 'To', document: AdminUsersDocument, dataType: 'users' }),
]
