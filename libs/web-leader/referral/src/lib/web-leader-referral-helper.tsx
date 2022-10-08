import { WebUiFormField } from "@biztobiz/web-ui/form";
import React from "react";
import {
  AdminChaptersDocument,
  AdminTransactionsDocument,
  AdminUsersDocument,
  ReferralRating
} from "@biztobiz/shared/util-sdk";

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
  WebUiFormField.relationSelect('fromId', {
    label: 'From',
    document: AdminUsersDocument,
    dataType: 'users',
  }),
  WebUiFormField.relationSelect('toId', {
    label: 'To',
    document: AdminUsersDocument,
    dataType: 'users',
  }),
  WebUiFormField.relationSelect('sentById', {
    label: 'Sent By',
    document: AdminUsersDocument,
    dataType: 'users',
    required: true,
  }),
  WebUiFormField.relationSelect('fromChapterId', {
    label: 'From Chapter',
    document: AdminChaptersDocument,
    dataType: 'chapters',
  }),
  WebUiFormField.relationSelect('toChapterId', {
    label: 'To Chapter',
    document: AdminChaptersDocument,
    dataType: 'chapters',
  }),
  WebUiFormField.relationSelect('transactions', {
    label: 'Transactions',
    document: AdminTransactionsDocument,
    dataType: 'transactions',
    multi: true,
  }),
]
