import { WebUiFormField } from '@biztobiz/web-ui/form'
import React from 'react'

// TODO: Create custom filter functions
// function regionFilterFunction(regions: Region[]) {
//   return regions?.filter((region) => !region.Company?.id)
// }

export const companyFields: WebUiFormField[] = [
  WebUiFormField.input('name', { label: 'Company Name', required: true }),
  // WebUiFormField.relationSelect('members', {
  //   label: 'Members',
  //   document: AdminUsersDocument,
  //   dataType: 'users',
  //   multi: true,
  // }),
]
