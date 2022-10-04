import React, { useLayoutEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { currentPathAtom, isDevAtom, searchAtom } from '@biztobiz/web/global/data-access'
import { WebUiDataTableFeature } from '@biztobiz/web-ui/data-table/feature'
import { WebUiDevDataFeature } from '@biztobiz/web-ui/dev-data/feature'
import { useAdminRegionsQuery, useAdminRegionPaginationQuery } from '@biztobiz/shared/util-sdk'
import { RESET } from 'jotai/utils'

interface WebAdminRegionListProps {
  userId?: string
  chapterId?: string
  referralId?: string
}

export function WebAdminRegionList(props: WebAdminRegionListProps) {
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

  const { data: regions } = useAdminRegionsQuery({
    variables,
  })

  const { data: pagination } = useAdminRegionPaginationQuery({
    variables,
  })

  useLayoutEffect(() => {
    setCurrentPath({
      path: '/admin/regions',
      name: 'Regions',
      description: 'View and manage all regions in your organization',
      showSearch: true,
      actionText: 'Add Region',
      actionLink: '/admin/region/new',
    })

    return () => {
      setCurrentPath(RESET)
    }
  }, [])

  return (
    <>
      <WebUiDataTableFeature
        data={regions?.regions}
        path={'/admin/region'}
        fields={['name']}
        pagination={pagination?.counters}
        setSkip={setSkip}
      />
      {isDev && regions?.regions ? <WebUiDevDataFeature data={regions} /> : null}
    </>
  )
}
