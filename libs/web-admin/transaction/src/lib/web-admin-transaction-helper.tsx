import { WebUiFormField } from '@biztobiz/web-ui/form'
import React from 'react'
import { AdminChaptersDocument, AdminReferralsDocument, AdminUsersDocument } from '@biztobiz/shared/util-sdk'

// TODO: Create custom filter functions
// function regionFilterFunction(regions: Region[]) {
//   return regions?.filter((region) => !region.Transaction?.id)
// }

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
    dataType: 'users',
  }),
  WebUiFormField.relationSelect('chapterId', {
    label: 'Chapter',
    document: AdminChaptersDocument,
    dataType: 'chapters',
  }),
  WebUiFormField.relationSelect('referralId', {
    label: 'Referral',
    document: AdminReferralsDocument,
    dataType: 'referrals',
  }),
]
