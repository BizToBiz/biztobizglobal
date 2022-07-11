import React, { useLayoutEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { currentPathAtom } from '@biztobiz/web/global/data-access'
import { AdminCreateChapterInput, ChapterStatus, useAdminCreateChapterMutation } from '@biztobiz/shared/util-sdk'
import { RESET } from 'jotai/utils'
import { WebUiForm } from '@biztobiz/web-ui/form'
import { chapterFields } from './web-admin-chapter-helper'

export function WebAdminChapterCreate() {
  const [currentPath, setCurrentPath] = useAtom(currentPathAtom)
  const [loading, setLoading] = useState(false)

  const [createChapter] = useAdminCreateChapterMutation()

  const submit = async (input: AdminCreateChapterInput) => {
    setLoading(true)
    input.status = ChapterStatus[input.status ? input.status : ChapterStatus.NowForming]
    await createChapter({
      variables: {
        input,
      },
    })
    setLoading(false)
  }

  useLayoutEffect(() => {
    setCurrentPath({
      path: '/admin/chapters/new',
      name: 'Create a Chapter',
      description: 'Use the form below to add a new chapter',
      showSearch: false,
      actionText: 'Back to Chapter List',
      actionLink: '/admin/chapters',
    })

    return () => {
      setCurrentPath(RESET)
    }
  }, [])

  return (
    <WebUiForm
      fields={chapterFields}
      submit={(values) => submit(values as AdminCreateChapterInput)}
      defaultValues={undefined}
      buttonText={'Create Chapter'}
      loading={loading}
    />
  )
}
