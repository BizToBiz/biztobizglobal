import { WebUiFormField } from '@biztobiz/web-ui/form'
import React from 'react'
import { AdminChaptersDocument, AdminUsersDocument } from '@biztobiz/shared/util-sdk'

// TODO: Create custom filter functions
// function regionFilterFunction(regions: Region[]) {
//   return regions?.filter((region) => !region.Upload?.id)
// }

export const uploadFields: WebUiFormField[] = [
  WebUiFormField.input('format', { label: 'Format' }),
  WebUiFormField.input('originalFilename', { label: 'Original Filename' }),
  WebUiFormField.input('publicId', { label: 'Public Id', required: true }),
  WebUiFormField.input('resourceType', { label: 'Resource Type', required: true }),
  WebUiFormField.input('secureUrl', { label: 'Secure URL', required: true }),
  WebUiFormField.input('signature', { label: 'Signature', required: true }),
  WebUiFormField.input('thumbnailUrl', { label: 'Thumbnail Url', required: true }),
  WebUiFormField.input('url', { label: 'URL' }),
  WebUiFormField.input('type', { label: 'Type' }),
  WebUiFormField.relationSelect('userId', { label: 'User', document: AdminUsersDocument, dataType: 'users' }),
  WebUiFormField.relationSelect('chapterId', {
    label: 'Chapter',
    document: AdminChaptersDocument,
    dataType: 'chapters',
  }),
]
