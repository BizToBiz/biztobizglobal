import React from 'react'
import { useAtom } from 'jotai'
import { isDevAtom } from '@biztobiz/web/global/data-access'
import {
  AdminDeleteChapterMemberDocument,
  AdminUpdateChapterMemberDocument,
  useAdminChapterMemberQuery,
} from '@biztobiz/shared/util-sdk'
import { useParams } from 'react-router-dom'
import { cleanDatabaseOutput } from '@biztobiz/shared/utils/feature'
import { chapterMemberFields } from './web-admin-chapter-member-helper'
import { WebAdminUpdateForm } from '@biztobiz/web-admin/crud-helper'

export function WebAdminChapterMemberUpdate() {
  const params = useParams()
  const [isDev] = useAtom(isDevAtom)

  const { data: chapterMember, loading } = useAdminChapterMemberQuery({
    skip: !params?.['id'],
    variables: {
      chapterMemberId: params?.['id'] ?? 'NoId',
    },
  })

  if (!params?.['id']) return <div>No Id</div>

  function defaultValues() {
    if (chapterMember?.chapterMember && !loading) {
      return cleanDatabaseOutput(chapterMember.chapterMember, chapterMemberFields)
    } else {
      return undefined
    }
  }

  const pathData = {
    path: '/admin/chapter-member/:id',
    name: 'Edit Chapter Member',
    description: 'Update the information for this chapter member',
    showSearch: false,
    actionText: 'Back to Chapter Member List',
    actionLink: '/admin/chapter-members',
  }

  return (
    <WebAdminUpdateForm
      pathData={pathData}
      id={params['id']}
      defaultValues={defaultValues()}
      document={AdminUpdateChapterMemberDocument}
      deleteDocument={AdminDeleteChapterMemberDocument}
      buttonText={'Chapter Member'}
      fields={chapterMemberFields}
      idName={'chapterMemberId'}
    />
  )
}
