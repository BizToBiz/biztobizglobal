import { WebUiFormField } from '@biztobiz/web-ui/form'
import React from 'react'
import { SelectFieldOptions } from '@biztobiz/web-admin/crud-helper'

// TODO: Create custom filter functions
// function regionFilterFunction(regions: Region[]) {
//   return regions?.filter((region) => !region.Upload?.id)
// }

export const uploadFields: WebUiFormField[] = [WebUiFormField.input('name', { label: 'name' })]

// TODO: Populate Select Fields
export const uploadSelectFields: SelectFieldOptions[] = [
  // { name: 'manager', type: 'single', idName: 'managerId', mapFunction: mapUser },
]
