import { WebUiFormField } from '@biztobiz/web-ui/form'
import React from 'react'
import { AdminChaptersDocument, AdminTerritoriesDocument, AdminUsersDocument } from '@biztobiz/shared/util-sdk'

// TODO: Create custom filter functions
// function regionFilterFunction(regions: Region[]) {
//   return regions?.filter((region) => !region.Region?.id)
// }

export const regionFields: WebUiFormField[] = [
  WebUiFormField.input('name', { label: 'Name' }),
  WebUiFormField.relationSelect('managerId', {
    label: 'Manager',
    document: AdminUsersDocument,
    dataType: 'users',
  }),
  WebUiFormField.relationSelect('territoryId', {
    label: 'Territory',
    document: AdminTerritoriesDocument,
    dataType: 'territories',
  }),
  WebUiFormField.relationSelect('chapters', {
    label: 'Chapters',
    document: AdminChaptersDocument,
    dataType: 'chapters',
    multi: true,
  }),
]
