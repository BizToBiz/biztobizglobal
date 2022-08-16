import React from 'react'
import { LeaderCreateChapterDocument } from '@biztobiz/shared/util-sdk'
import { chapterFields, chapterSelectFields } from './web-leader/chapter-helper'
import { WebAdminCreateForm } from '@biztobiz/web-admin/crud-helper'

export function WebLeaderChapterCreate() {
  const pathData = {
    path: '/leader/chapters/new',
    name: 'Create a Chapter',
    description: 'Use the form below to add a new chapter',
    showSearch: false,
    actionText: 'Back to Chapter List',
    actionLink: '/leader/chapters',
  }

  return (
    <WebAdminCreateForm
      pathData={pathData}
      document={LeaderCreateChapterDocument}
      navigateTo={'/leader/chapter'}
      mutationName={'createChapter'}
      buttonText={' Chapter'}
      fields={chapterFields}
      selectFields={chapterSelectFields}
    />
  )
}
