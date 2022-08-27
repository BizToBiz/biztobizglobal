import { WebUiFormField } from '@biztobiz/web-ui/form'
import React from 'react'
import {
  AdminChaptersDocument,
  AdminMeetingPresencesDocument,
  AdminSubstitutesDocument,
} from '@biztobiz/shared/util-sdk'

// TODO: Create custom filter functions
// function regionFilterFunction(regions: Region[]) {
//   return regions?.filter((region) => !region.Meeting?.id)
// }

export const meetingFields: WebUiFormField[] = [
  WebUiFormField.datePicker('date', { label: 'Meeting Date', required: true }),
  WebUiFormField.relationSelect('chapterId', {
    label: 'Chapter',
    document: AdminChaptersDocument,
    dataType: 'chapters',
  }),
  WebUiFormField.checkbox('isVisitorDay', { label: 'Is Visitor Day?' }),
  WebUiFormField.relationSelect('presence', {
    label: 'Presence',
    dataType: 'presences',
    document: AdminMeetingPresencesDocument,
    multi: true,
  }),
  WebUiFormField.relationSelect('substitutes', {
    label: 'Substitutes',
    document: AdminSubstitutesDocument,
    dataType: 'substitutes',
    multi: true,
  }),
]
