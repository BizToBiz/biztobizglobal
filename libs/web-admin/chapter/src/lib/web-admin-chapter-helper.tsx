import { WebUiFormField } from '@biztobiz/web-ui/form'
import React from 'react'
import { SelectFieldOptions } from '@biztobiz/web-admin/crud-helper'
import { ChapterStatus } from '@biztobiz/shared/util-sdk'

// TODO: Create custom filter functions
// function regionFilterFunction(regions: Region[]) {
//   return regions?.filter((region) => !region.Chapter?.id)
// }

export const chapterFields: WebUiFormField[] = [
  WebUiFormField.datePicker('establishedDate', { label: 'Date Established' }),
  WebUiFormField.input('name', { label: 'Chapter Name', required: true }),
  WebUiFormField.enumSelect('status', {
    label: 'Status',
    required: true,
    defaultValue: ChapterStatus.NowForming,
    enum: ChapterStatus,
  }),
  WebUiFormField.textArea('description', { label: 'Description' }),
  WebUiFormField.email('avatarEmail', { label: 'Avatar Email' }),
  WebUiFormField.url('avatarUrl', { label: 'Avatar URL' }),
  WebUiFormField.input('latitude', { label: 'Latitude' }),
  WebUiFormField.input('longitude', { label: 'Longitude' }),
  WebUiFormField.input('city', { label: 'City' }),
  WebUiFormField.input('state', { label: 'State' }),
  WebUiFormField.url('facebook', { label: 'Facebook URL' }),
  // WebUiFormField.relationSelect('regionId', {
  //   label: 'Region',
  //   document: AdminRegionsDocument,
  //   selectOptionsFunction: mapRegions,
  //   dataType: 'regions',
  // }),
]

// TODO: Populate Select Fields
export const chapterSelectFields: SelectFieldOptions[] = [
  // { name: 'region', type: 'single', idName: 'regionId', mapFunction: mapRegion },
]
