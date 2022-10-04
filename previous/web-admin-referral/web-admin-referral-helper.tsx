import { WebUiFormField } from '@biztobiz/web-ui/form'
import React from 'react'
import { AdminChaptersDocument, AdminUsersDocument, ReferralRating } from '@biztobiz/shared/util-sdk'
import { mapChapters, mapUsers } from '@biztobiz/web-admin/crud-helper'

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
  WebUiFormField.relationSelect('fromId', {
    label: 'From',
    document: AdminUsersDocument,
    selectOptionsFunction: mapUsers,
    dataType: 'users',
  }),
  WebUiFormField.relationSelect('toId', {
    label: 'To',
    document: AdminUsersDocument,
    selectOptionsFunction: mapUsers,
    dataType: 'users',
  }),
  WebUiFormField.relationSelect('sentById', {
    label: 'Sent By',
    document: AdminUsersDocument,
    selectOptionsFunction: mapUsers,
    dataType: 'users',
    required: true,
  }),
  WebUiFormField.relationSelect('fromChapterId', {
    label: 'From Chapter',
    document: AdminChaptersDocument,
    selectOptionsFunction: mapChapters,
    dataType: 'chapters',
  }),
  WebUiFormField.relationSelect('toChapterId', {
    label: 'To Chapter',
    document: AdminChaptersDocument,
    selectOptionsFunction: mapChapters,
    dataType: 'chapters',
  }),
]
