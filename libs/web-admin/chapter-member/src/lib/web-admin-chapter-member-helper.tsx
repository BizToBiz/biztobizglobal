import { WebUiFormField } from '@biztobiz/web-ui/form'
import React from 'react'
import { AdminChaptersDocument, AdminUsersDocument, ChapterMemberRole } from '@biztobiz/shared/util-sdk'

// TODO: Create custom filter functions
// function regionFilterFunction(regions: Region[]) {
//   return regions?.filter((region) => !region.ChapterMember?.id)
// }

export const chapterMemberFields: WebUiFormField[] = [
  WebUiFormField.checkbox('isMentor', { label: 'User is a Mentor' }),
  WebUiFormField.checkbox('isTrainer', { label: 'User is a Trainer' }),
  WebUiFormField.enumSelect('role', { label: 'Role', enum: ChapterMemberRole }),
  WebUiFormField.relationSelect('chapterId', {
    label: 'Chapter',
    document: AdminChaptersDocument,
    dataType: 'chapters',
  }),
  WebUiFormField.relationSelect('memberId', { label: 'Member', document: AdminUsersDocument, dataType: 'users' }),
]
