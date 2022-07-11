import React, { useLayoutEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { currentPathAtom } from '@biztobiz/web/global/data-access'
import { AdminUpdateChapterInput, useAdminChapterQuery, useAdminUpdateChapterMutation } from '@biztobiz/shared/util-sdk'
import { RESET } from 'jotai/utils'
import { useParams } from 'react-router-dom'
import { WebUiForm } from '@biztobiz/web-ui/form'
import { chapterFields } from './web-admin-chapter-helper'
import { cleanObject } from '@biztobiz/shared/utils/feature'

export function WebAdminChapterUpdate() {
  const params = useParams()
  const [currentPath, setCurrentPath] = useAtom(currentPathAtom)
  const [loading, setLoading] = useState(false)

  const [updateChapter] = useAdminUpdateChapterMutation()

  const { data: chapter } = useAdminChapterQuery({
    skip: !params?.['id'],
    variables: {
      chapterId: params?.['id'] ?? 'NoChapterId',
    },
  })

  const submit = async (input: AdminUpdateChapterInput) => {
    setLoading(true)
    const cleanedInput = cleanObject(input)
    await updateChapter({
      variables: {
        chapterId: params?.['id'] ?? 'NoChapterId',
        input: {
          ...cleanedInput,
        },
      },
    })
    setLoading(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useLayoutEffect(() => {
    setCurrentPath({
      path: '/admin/chapters/:id',
      name: 'Edit Chapter',
      description: 'Update the information for this chapter',
      showSearch: false,
      actionText: 'Back to Chapter List',
      actionLink: '/admin/chapters',
    })

    return () => {
      setCurrentPath(RESET)
    }
  }, [])

  function defaultValues() {
    if (chapter?.chapter) {
      return cleanObject({
        ...chapter.chapter,
        establishedDate: chapter.chapter.establishedDate?.split('T')[0],
      })
    } else {
      return undefined
    }
  }
  return (
    <WebUiForm
      fields={chapterFields}
      submit={(values) => submit(values as AdminUpdateChapterInput)}
      defaultValues={defaultValues()}
      buttonText={'Update Chapter'}
      loading={loading}
    />
  )
}
