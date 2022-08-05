import { WebUiFormField } from '@biztobiz/web-ui/form'
import { AdminUsersDocument, User } from '@biztobiz/shared/util-sdk'
import React from 'react'

export function mapUsers(users: User[]): any {
  return users?.map((option) => ({ value: `${option.id}`, label: `${option.firstName} ${option.lastName}` }))
}

export const transactionFields: WebUiFormField[] = [
  WebUiFormField.number('amount', { label: 'Amount', required: true }),
  WebUiFormField.datePicker('date', { label: 'Date', required: true }),
  WebUiFormField.input('enteredBy', { label: 'Entered By' }),
  WebUiFormField.input('enteredOn', { label: 'Entered On' }),
  WebUiFormField.input('industry', { label: 'Industry' }),
  WebUiFormField.input('state', { label: 'State' }),
  WebUiFormField.relationSelect('userId', {
    label: 'User',
    document: AdminUsersDocument,
    selectOptionsFunction: mapUsers,
    dataType: 'users',
  }),
]
