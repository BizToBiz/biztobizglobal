import React, { useLayoutEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { currentPathAtom, isDevAtom, searchAtom } from '@biztobiz/web/global/data-access'
import { WebUiDataTableFeature } from '@biztobiz/web-ui/data-table/feature'
import { WebUiDevDataFeature } from '@biztobiz/web-ui/dev-data/feature'
import { useAdminChapterPaginationQuery, useAdminChaptersQuery } from '@biztobiz/shared/util-sdk'
import { RESET } from 'jotai/utils'

interface WebAdminChapterListProps {
  userId?: string
  chapterId?: string
  referralId?: string
}

export function WebAdminChapterList(props: WebAdminChapterListProps) {
  const [, setCurrentPath] = useAtom(currentPathAtom)
  const [search] = useAtom(searchAtom)
  const [isDev] = useAtom(isDevAtom)
  const [skip, setSkip] = useState(0)

  const variables = {
    input: {
      take: 20,
      userId: props?.userId,
      chapterId: props?.chapterId,
      referralId: props?.referralId,
      skip,
      search,
    },
  }

  const { data: chapters } = useAdminChaptersQuery({
    variables,
  })

  const { data: pagination } = useAdminChapterPaginationQuery({
    variables,
  })

  useLayoutEffect(() => {
    setCurrentPath({
      path: '/admin/chapters',
      name: 'Chapters',
      description: 'View and manage all chapters in your organization',
      showSearch: true,
      actionText: 'Add Chapter',
      actionLink: '/admin/chapter/new',
    })

    return () => {
      setCurrentPath(RESET)
    }
  }, [])

  return (
    <>
      <WebUiDataTableFeature
        data={chapters?.chapters}
        path={'/admin/chapter'}
        fields={['name']}
        pagination={pagination?.counters}
        setSkip={setSkip}
      />
      {isDev && chapters?.chapters ? <WebUiDevDataFeature data={chapters} /> : null}
    </>
  )
}
