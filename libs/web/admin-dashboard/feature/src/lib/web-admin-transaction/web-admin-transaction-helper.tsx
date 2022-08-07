import { WebUiFormField } from '@biztobiz/web-ui/form'
import { AdminChaptersDocument, AdminUsersDocument, Chapter, User } from '@biztobiz/shared/util-sdk'
import React from 'react'
import { mapChapters, mapUsers } from '../web-admin-helper/web-admin-helper'

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
  WebUiFormField.relationSelect('chapterId', {
    label: 'Chapter',
    document: AdminChaptersDocument,
    selectOptionsFunction: mapChapters,
    dataType: 'chapters',
  }),
]
