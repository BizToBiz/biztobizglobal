import { AdminRegionsDocument, ChapterStatus, DayOfWeek } from '@biztobiz/shared/util-sdk'
import { WebUiFormField } from '@biztobiz/web-ui/form'
import React from 'react'

// TODO: Create custom filter functions
// function regionFilterFunction(regions: Region[]) {
//   return regions?.filter((region) => !region.Chapter?.id)
// }

export const chapterFields: WebUiFormField[] = [
  WebUiFormField.datePicker('establishedDate', { label: 'Date Established' }),
  WebUiFormField.input('name', { label: 'Chapter Name', required: true, defaultValue: DayOfWeek.Monday }),
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
  WebUiFormField.enumSelect('meetingDay', { label: 'Meeting Day', enum: DayOfWeek }),
  WebUiFormField.input('meetingtime', { label: 'Meeting Time' }),
  WebUiFormField.input('meetingDetails', { label: 'Meeting Details' }),
  WebUiFormField.relationSelect('regionId', {
    label: 'Region',
    document: AdminRegionsDocument,
    dataType: 'regions',
  }),
]
