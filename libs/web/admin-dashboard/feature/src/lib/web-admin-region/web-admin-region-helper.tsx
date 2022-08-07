import { WebUiFormField } from '@biztobiz/web-ui/form'
import React from 'react'
import { AdminTerritoriesDocument, AdminUsersDocument, Territory } from '@biztobiz/shared/util-sdk'
import { mapUsers } from '../web-admin-helper/web-admin-helper'

export function mapTerritories(territories: Territory[]): any {
  return territories?.map((option) => ({ value: `${option.id}`, label: `${option.name}` }))
}

export const regionFields: WebUiFormField[] = [
  WebUiFormField.input('name', { label: 'Name' }),
  WebUiFormField.relationSelect('managerId', {
    label: 'Manager',
    document: AdminUsersDocument,
    selectOptionsFunction: mapUsers,
    dataType: 'users',
  }),
  WebUiFormField.relationSelect('territoryId', {
    label: 'Territory',
    document: AdminTerritoriesDocument,
    selectOptionsFunction: mapTerritories,
    dataType: 'territories',
  }),
]
