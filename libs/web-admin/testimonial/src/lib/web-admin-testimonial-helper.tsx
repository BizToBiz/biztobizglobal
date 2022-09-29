import { WebUiFormField } from '@biztobiz/web-ui/form'
import React from 'react'
import { AdminUsersDocument } from '@biztobiz/shared/util-sdk'

// TODO: Create custom filter functions
// function regionFilterFunction(regions: Region[]) {
//   return regions?.filter((region) => !region.Testimonial?.id)
// }

export const testimonialFields: WebUiFormField[] = [
  WebUiFormField.textArea('text', { label: 'Text' }),
  WebUiFormField.relationSelect('fromId', { label: 'From', document: AdminUsersDocument, dataType: 'users' }),
  WebUiFormField.relationSelect('toId', { label: 'To', document: AdminUsersDocument, dataType: 'users' }),
]
