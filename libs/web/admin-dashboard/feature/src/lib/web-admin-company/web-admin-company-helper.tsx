import { WebUiFormField } from '@biztobiz/web-ui/form'
import { AdminUsersDocument } from '@biztobiz/shared/util-sdk'
import { mapUsers, SelectFieldOptions } from '@biztobiz/web-admin/crud-helper'

export const companyFields: WebUiFormField[] = [
  WebUiFormField.input('name', { label: 'Company Name', required: true }),
  WebUiFormField.relationSelect('members', {
    label: 'Members',
    document: AdminUsersDocument,
    selectOptionsFunction: mapUsers,
    dataType: 'users',
  }),
]

export const companySelectFields: SelectFieldOptions[] = [
  { name: 'members', type: 'multi', idName: 'members', mapFunction: mapUsers },
]
