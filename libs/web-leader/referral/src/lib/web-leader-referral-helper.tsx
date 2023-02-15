import { WebUiFormField } from '@biztobiz/web-ui/form'
import React from 'react'
import {
  LeaderChapterUsersDocument,
  LeaderTransactionsDocument,
  LeaderUsersDocument,
  ReferralRating,
} from '@biztobiz/shared/util-sdk'

// TODO: Create custom filter functions
// function regionFilterFunction(regions: Region[]) {
//   return regions?.filter((region) => !region.Referral?.id)
// }

export const referralFields: WebUiFormField[] = [
  WebUiFormField.datePicker('referralDate', { label: 'Date', required: true }),
  WebUiFormField.input('firstName', { label: 'First Name', required: true }),
  WebUiFormField.input('lastName', { label: 'Last Name', required: true }),
  WebUiFormField.email('email', { label: 'Email' }),
  WebUiFormField.phone('phone', { label: 'Phone' }),
  WebUiFormField.input('notes', { label: 'Notes' }),
  WebUiFormField.enumSelect('rating', {
    label: 'Rating',
    required: true,
    defaultValue: ReferralRating.Warm,
    enum: ReferralRating,
  }),
  WebUiFormField.relationSelect('fromId', {
    label: 'From',
    document: LeaderChapterUsersDocument,
    dataType: 'users',
    required: true,
  }),
  WebUiFormField.relationSelect('toId', {
    label: 'To',
    document: LeaderUsersDocument,
    dataType: 'users',
    required: true,
  }),
  WebUiFormField.relationSelect('transactions', {
    label: 'Transactions',
    document: LeaderTransactionsDocument,
    dataType: 'transactions',
    multi: true,
  }),
]
