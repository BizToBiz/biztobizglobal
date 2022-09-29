import { WebUiFormField } from '@biztobiz/web-ui/form'
import React from 'react'
import { AdminChaptersDocument } from '@biztobiz/shared/util-sdk'

// TODO: Create custom filter functions
// function regionFilterFunction(regions: Region[]) {
//   return regions?.filter((region) => !region.SubstituteGroup?.id)
// }

export const substituteGroupFields: WebUiFormField[] = [
  WebUiFormField.input('name', { label: 'Name' }),
  WebUiFormField.relationSelect('chapters', {
    label: 'Chapters',
    dataType: 'chapters',
    document: AdminChaptersDocument,
    multi: true,
  }),
]
