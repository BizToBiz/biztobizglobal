import { WebUiFormField } from '@biztobiz/web-ui/form'
import React from 'react'
import { SelectFieldOptions } from '@biztobiz/web-admin/crud-helper'
import { ReferralRating } from '@biztobiz/shared/util-sdk'

// TODO: Create custom filter functions
// function regionFilterFunction(regions: Region[]) {
//   return regions?.filter((region) => !region.Referral?.id)
// }

export const referralFields: WebUiFormField[] = [
  WebUiFormField.input('firstName', { label: 'First Name', required: true }),
  WebUiFormField.input('lastName', { label: 'Last Name', required: true }),
  WebUiFormField.email('email', { label: 'Email' }),
  WebUiFormField.phone('phone', { label: 'Phone' }),
  WebUiFormField.input('notes', { label: 'Notes' }),
  WebUiFormField.input('fromIndustry', { label: 'From Industry' }),
  WebUiFormField.input('toIndustry', { label: 'To Industry' }),
  WebUiFormField.enumSelect('rating', {
    label: 'Rating',
    required: true,
    defaultValue: ReferralRating.Warm,
    enum: ReferralRating,
  }),
]

// TODO: Populate Select Fields
export const referralSelectFields: SelectFieldOptions[] = [
  // { name: 'manager', type: 'single', idName: 'managerId', mapFunction: mapUser },
]
