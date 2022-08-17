import React, { useLayoutEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { currentPathAtom, isDevAtom, searchAtom } from '@biztobiz/web/global/data-access'
import { WebUiDataTableFeature } from '@biztobiz/web-ui/data-table/feature'
import { WebUiDevDataFeature } from '@biztobiz/web-ui/dev-data/feature'
import { useAdminTerritoriesQuery, useAdminTerritoryPaginationQuery } from '@biztobiz/shared/util-sdk'
import { RESET } from 'jotai/utils'

interface WebAdminTerritoryListProps {
  userId?: string
  chapterId?: string
  referralId?: string
}

export function WebAdminTerritoryList(props: WebAdminTerritoryListProps) {
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

  const { data: territories } = useAdminTerritoriesQuery({
    variables,
  })

  const { data: pagination } = useAdminTerritoryPaginationQuery({
    variables,
  })

  useLayoutEffect(() => {
    setCurrentPath({
      path: '/admin/territories',
      name: 'Territories',
      description: 'View and manage all territories in your organization',
      showSearch: true,
      actionText: 'Add Territory',
      actionLink: '/admin/territory/new',
    })

    return () => {
      setCurrentPath(RESET)
    }
  }, [])

  return (
    <>
      <WebUiDataTableFeature
        data={territories?.territories}
        path={'/admin/territory'}
        fields={['name']}
        pagination={pagination?.counters}
        setSkip={setSkip}
      />
      {isDev && territories?.territories ? <WebUiDevDataFeature data={territories} /> : null}
    </>
  )
}
