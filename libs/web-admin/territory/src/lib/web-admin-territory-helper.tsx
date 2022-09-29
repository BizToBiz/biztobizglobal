import { WebUiFormField } from '@biztobiz/web-ui/form'
import React from 'react'
import { AdminRegionsDocument, AdminUsersDocument, Region } from '@biztobiz/shared/util-sdk'

function regionFilterFunction(regions: Region[]) {
  return regions?.filter((region) => !region.territory?.id)
}

function managerFilterFunction(users: any[]) {
  return users?.filter((user) => {
    return !user.territoryManaged?.id
  })
}

export const territoryFields: WebUiFormField[] = [
  WebUiFormField.input('name', { label: 'Territory Name' }),
  WebUiFormField.relationSelect('managerId', {
    label: 'Manager',
    document: AdminUsersDocument,
    dataType: 'users',
    filter: managerFilterFunction,
  }),
  WebUiFormField.relationSelect('regions', {
    label: 'Regions',
    document: AdminRegionsDocument,
    dataType: 'regions',
    multi: true,
    filter: regionFilterFunction,
  }),
]
