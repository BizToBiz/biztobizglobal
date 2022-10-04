import React from 'react'
import { useAtom } from 'jotai'
import { isDevAtom } from '@biztobiz/web/global/data-access'
import { AdminDeleteChapterDocument, AdminUpdateChapterDocument, useAdminChapterQuery } from '@biztobiz/shared/util-sdk'
import { useParams } from 'react-router-dom'
import { cleanDatabaseOutput } from '@biztobiz/shared/utils/feature'
import { WebAdminUpdateForm } from '@biztobiz/web-admin/crud-helper'
import { chapterFields, chapterSelectFields } from './web-admin-chapter-helper'

export function WebAdminChapterUpdate() {
  const params = useParams()
  const [isDev] = useAtom(isDevAtom)

  const { data: chapter } = useAdminChapterQuery({
    skip: !params?.['id'],
    variables: {
      chapterId: params?.['id'] ?? 'NoId',
    },
  })

  if (!params?.['id']) {
    return <div>No Id</div>
  }

  function defaultValues() {
    if (chapter?.chapter) {
      return cleanDatabaseOutput(chapter.chapter, chapterSelectFields)
    } else {
      return undefined
    }
  }
  const pathData = {
    path: '/admin/chapter/:id',
    name: 'Edit Chapter',
    description: 'Update the information for this chapter',
    showSearch: false,
    actionText: 'Back to Chapter List',
    actionLink: '/admin/chapters',
  }

  return (
    <WebAdminUpdateForm
      pathData={pathData}
      id={params['id']}
      idName={'chapterId'}
      defaultValues={defaultValues()}
      document={AdminUpdateChapterDocument}
      deleteDocument={AdminDeleteChapterDocument}
      buttonText={'Chapter'}
      fields={chapterFields}
      selectFields={chapterSelectFields}
    />
  )
}
