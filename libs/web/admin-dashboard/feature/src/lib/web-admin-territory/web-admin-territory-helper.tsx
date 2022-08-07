import { WebUiFormField } from '@biztobiz/web-ui/form'
import React from 'react'
import { AdminRegionsDocument, AdminUsersDocument, Region } from '@biztobiz/shared/util-sdk'
import { mapRegions, mapUsers } from '../web-admin-helper/web-admin-helper'

function filterFunction(regions: Region[]) {
  return regions.filter((region) => !region.territory)
}

export const territoryFields: WebUiFormField[] = [
  WebUiFormField.input('name', { label: 'Name' }),
  WebUiFormField.relationSelect('managerId', {
    label: 'Manager',
    document: AdminUsersDocument,
    selectOptionsFunction: mapUsers,
    dataType: 'users',
  }),
]

export const territoryUpdateFields: WebUiFormField[] = [
  WebUiFormField.relationSelect('regionIds', {
    label: 'Regions',
    document: AdminRegionsDocument,
    selectOptionsFunction: mapRegions,
    dataType: 'regions',
    multiselect: true,
    filter: filterFunction,
  }),
]
