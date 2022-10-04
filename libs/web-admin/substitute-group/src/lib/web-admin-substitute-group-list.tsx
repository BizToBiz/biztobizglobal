import React, { useLayoutEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { currentPathAtom, isDevAtom, searchAtom } from '@biztobiz/web/global/data-access'
import { WebUiDataTableFeature } from '@biztobiz/web-ui/data-table/feature'
import { WebUiDevDataFeature } from '@biztobiz/web-ui/dev-data/feature'
import { useAdminSubstituteGroupPaginationQuery, useAdminSubstituteGroupsQuery } from '@biztobiz/shared/util-sdk'
import { RESET } from 'jotai/utils'

interface WebAdminSubstituteGroupListProps {
  userId?: string
  chapterId?: string
  referralId?: string
}

export function WebAdminSubstituteGroupList(props: WebAdminSubstituteGroupListProps) {
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

  const { data: substituteGroups } = useAdminSubstituteGroupsQuery({
    variables,
  })

  const { data: pagination } = useAdminSubstituteGroupPaginationQuery({
    variables,
  })

  useLayoutEffect(() => {
    setCurrentPath({
      path: '/admin/substitute-groups',
      name: 'SubstituteGroups',
      description: 'View and manage all substitute-groups in your organization',
      showSearch: true,
      actionText: 'Add SubstituteGroup',
      actionLink: '/admin/substitute-group/new',
    })

    return () => {
      setCurrentPath(RESET)
    }
  }, [])

  return (
    <>
      <WebUiDataTableFeature
        data={substituteGroups?.substituteGroups}
        path={'/admin/substitute-group'}
        fields={['name']}
        pagination={pagination?.counters}
        setSkip={setSkip}
      />
      {isDev && substituteGroups?.substituteGroups ? <WebUiDevDataFeature data={substituteGroups} /> : null}
    </>
  )
}
