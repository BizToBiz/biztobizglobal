import React, { useLayoutEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { currentPathAtom, isDevAtom, searchAtom } from '@biztobiz/web/global/data-access'
import { WebUiDataTableFeature } from '@biztobiz/web-ui/data-table/feature'
import { WebUiDevDataFeature } from '@biztobiz/web-ui/dev-data/feature'
import { useAdminChapterMemberPaginationQuery, useAdminChapterMembersQuery } from '@biztobiz/shared/util-sdk'
import { RESET } from 'jotai/utils'

interface WebAdminChapterMemberListProps {
  userId?: string
  chapterId?: string
  referralId?: string
}

export function WebAdminChapterMemberList(props: WebAdminChapterMemberListProps) {
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

  const { data: chapterMembers } = useAdminChapterMembersQuery({
    variables,
  })

  const { data: pagination } = useAdminChapterMemberPaginationQuery({
    variables,
  })

  useLayoutEffect(() => {
    setCurrentPath({
      path: '/admin/chapter-members',
      name: 'Chapter Members',
      description: 'View and manage all chapter members in your organization',
      showSearch: true,
      actionText: 'Add Chapter Member',
      actionLink: '/admin/chapter-member/new',
    })

    return () => {
      setCurrentPath(RESET)
    }
  }, [])

  return (
    <>
      <WebUiDataTableFeature
        data={chapterMembers?.chapterMembers}
        path={'/admin/chapter-member'}
        fields={['name']}
        pagination={pagination?.counters}
        setSkip={setSkip}
      />
      {isDev && chapterMembers?.chapterMembers ? <WebUiDevDataFeature data={chapterMembers} /> : null}
    </>
  )
}
