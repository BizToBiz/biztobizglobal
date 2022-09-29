import { WebUiFormField } from '@biztobiz/web-ui/form'
import React from 'react'
import { AdminCompaniesDocument, AdminUsersDocument } from '@biztobiz/shared/util-sdk'

// TODO: Create custom filter functions
// function regionFilterFunction(regions: Region[]) {
//   return regions?.filter((region) => !region.CompanyMember?.id)
// }

export const companyMemberFields: WebUiFormField[] = [
  WebUiFormField.datePicker('fromDate', { label: 'From Date' }),
  WebUiFormField.datePicker('thruDate', { label: 'To Date' }),
  WebUiFormField.input('role', { label: 'Role' }),
  WebUiFormField.input('location', { label: 'Location' }),
  WebUiFormField.relationSelect('companyId', {
    label: 'Company',
    dataType: 'companies',
    document: AdminCompaniesDocument,
  }),
  WebUiFormField.relationSelect('memberId', {
    label: 'Member',
    dataType: 'users',
    document: AdminUsersDocument,
  }),
]
