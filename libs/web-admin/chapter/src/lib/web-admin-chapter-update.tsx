import React from 'react'
import { useAtom } from 'jotai'
import { isDevAtom } from '@biztobiz/web/global/data-access'
import { AdminDeleteChapterDocument, AdminUpdateChapterDocument, useAdminChapterQuery } from '@biztobiz/shared/util-sdk'
import { useParams } from 'react-router-dom'
import { cleanDatabaseOutput } from '@biztobiz/shared/utils/feature'
import { chapterFields } from './web-admin-chapter-helper'
import { WebAdminUpdateForm } from '@biztobiz/web-admin/crud-helper'
import { WebUiDevDataFeature } from '@biztobiz/web-ui/dev-data/feature'

interface WebAdminChapterUpdateProps {
  chapterId?: string
}
export function WebAdminChapterUpdate(props: WebAdminChapterUpdateProps) {
  const params = useParams()
  const [isDev] = useAtom(isDevAtom)
  const chapterId = props?.chapterId ?? params?.['id'] ?? null

  const { data: chapter, loading } = useAdminChapterQuery({
    skip: !chapterId,
    variables: {
      chapterId: chapterId,
    },
  })

  if (!chapterId) return <div>Unknown Chapter</div>

  function defaultValues() {
    if (chapter?.chapter && !loading) {
      return cleanDatabaseOutput(chapter.chapter, chapterFields)
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
    <>
      <WebAdminUpdateForm
        pathData={pathData}
        id={params['id']}
        defaultValues={defaultValues()}
        document={AdminUpdateChapterDocument}
        deleteDocument={AdminDeleteChapterDocument}
        buttonText={'Chapter'}
        fields={chapterFields}
        idName={'chapterId'}
      />
      {isDev && chapter?.chapter ? <WebUiDevDataFeature data={chapter} /> : null}
    </>
  )
}
