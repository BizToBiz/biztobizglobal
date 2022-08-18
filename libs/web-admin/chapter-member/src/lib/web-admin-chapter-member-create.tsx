import React from 'react'
import { AdminCreateChapterMemberDocument } from '@biztobiz/shared/util-sdk'
import { chapterMemberFields } from './web-admin-chapter-member-helper'
import { WebAdminCreateForm } from '@biztobiz/web-admin/crud-helper'

export function WebAdminChapterMemberCreate() {
  const pathData = {
    path: '/admin/chapter-members/new',
    name: 'Create a ChapterMember',
    description: 'Use the form below to add a new ChapterMember',
    showSearch: false,
    actionText: 'Back to ChapterMember List',
    actionLink: '/admin/chapter-members',
  }

  return (
    <WebAdminCreateForm
      pathData={pathData}
      document={AdminCreateChapterMemberDocument}
      navigateTo={'/admin/chapter-member'}
      mutationName={'createChapterMember'}
      buttonText={' ChapterMember'}
      fields={chapterMemberFields}
    />
  )
}
