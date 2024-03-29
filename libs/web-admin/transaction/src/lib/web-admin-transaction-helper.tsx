import { WebUiFormField } from '@biztobiz/web-ui/form'
import React from 'react'
import { AdminReferralsDocument, AdminUsersDocument } from '@biztobiz/shared/util-sdk'

// TODO: Create custom filter functions
// function regionFilterFunction(regions: Region[]) {
//   return regions?.filter((region) => !region.Transaction?.id)
// }

export const transactionFields: WebUiFormField[] = [
  WebUiFormField.number('amount', { label: 'Amount', required: true }),
  WebUiFormField.datePicker('date', { label: 'Date', required: true }),
  WebUiFormField.relationSelect('userId', {
    label: 'User',
    document: AdminUsersDocument,
    dataType: 'users',
  }),
  WebUiFormField.relationSelect('referralId', {
    label: 'Referral',
    document: AdminReferralsDocument,
    dataType: 'referrals',
  }),
]
