import { WebUiFormField } from '@biztobiz/web-ui/form'
import { AdminUsersDocument } from '@biztobiz/shared/util-sdk'
import { mapUsers } from '../web-admin-helper/web-admin-helper'

export const companyFields: WebUiFormField[] = [
  WebUiFormField.input('name', { label: 'Company Name', required: true }),
  WebUiFormField.relationSelect('members', {
    label: 'Members',
    document: AdminUsersDocument,
    selectOptionsFunction: mapUsers,
    dataType: 'users',
  }),
]
