import { WebUiFormField } from '@biztobiz/web-ui/form'
import React from 'react'
import { AdminRegionsDocument, AdminUsersDocument, Region } from '@biztobiz/shared/util-sdk'
import { mapRegions, mapUser, mapUsers, SelectFieldOptions } from '../web-admin-helper/web-admin-helper'

function regionFilterFunction(regions: Region[]) {
  return regions?.filter((region) => !region.territory?.id)
}

function managerFilterFunction(users: any[]) {
  return users?.filter((user) => {
    return !user.territoryManaged?.id
  })
}

export const territoryFields: WebUiFormField[] = [
  WebUiFormField.input('name', { label: 'Name' }),
  WebUiFormField.relationSelect('managerId', {
    label: 'Manager',
    document: AdminUsersDocument,
    selectOptionsFunction: mapUsers,
    dataType: 'users',
    filter: managerFilterFunction,
  }),
  WebUiFormField.relationSelect('regions', {
    label: 'Regions',
    document: AdminRegionsDocument,
    selectOptionsFunction: mapRegions,
    dataType: 'regions',
    multiselect: true,
    filter: regionFilterFunction,
  }),
]

export const territorySelectFields: SelectFieldOptions[] = [
  { name: 'manager', type: 'single', idName: 'managerId', mapFunction: mapUser },
  { name: 'regions', type: 'multi', idName: 'regions', mapFunction: mapRegions },
]
