import React from 'react'
import { AdminCreateChapterDocument } from '@biztobiz/shared/util-sdk'
import { WebAdminCreateForm } from '../web-admin-helper/web-admin-create-form'
import { chapterFields } from './web-admin-chapter-helper'

export function WebAdminChapterCreate() {
  const pathData = {
    path: '/admin/chapters/new',
    name: 'Create a Chapter',
    description: 'Use the form below to add a new chapter',
    showSearch: false,
    actionText: 'Back to Chapter List',
    actionLink: '/admin/chapters',
  }

  return (
    <WebAdminCreateForm
      pathData={pathData}
      document={AdminCreateChapterDocument}
      navigateTo={'/admin/chapter'}
      mutationName={'createChapter'}
      buttonText={' Chapter'}
      fields={chapterFields}
    />
  )
}
