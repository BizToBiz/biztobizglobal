import { WebUiFormField } from '@biztobiz/web-ui/form'
import React from 'react'
import { AdminUsersDocument, NotificationReferenceType, NotificationType } from '@biztobiz/shared/util-sdk'

// TODO: Create custom filter functions
// function regionFilterFunction(regions: Region[]) {
//   return regions?.filter((region) => !region.Notification?.id)
// }

export const notificationFields: WebUiFormField[] = [
  WebUiFormField.checkbox('read', { label: 'Read' }),
  WebUiFormField.enumSelect('type', {
    label: 'Notification Type',
    enum: NotificationType,
    defaultValue: null,
  }),
  WebUiFormField.textArea('message', { label: 'Message' }),
  WebUiFormField.input('referenceId', { label: 'Reference Id' }),
  WebUiFormField.enumSelect('referenceType', { label: 'Reference Type', enum: NotificationReferenceType }),
  WebUiFormField.relationSelect('actorId', { label: 'Actor', document: AdminUsersDocument, dataType: 'users' }),
  WebUiFormField.relationSelect('toId', { label: 'To', document: AdminUsersDocument, dataType: 'users' }),
]
