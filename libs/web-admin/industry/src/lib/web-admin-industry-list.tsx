import React, { useLayoutEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { currentPathAtom, isDevAtom, searchAtom } from '@biztobiz/web/global/data-access'
import { WebUiDataTableFeature } from '@biztobiz/web-ui/data-table/feature'
import { WebUiDevDataFeature } from '@biztobiz/web-ui/dev-data/feature'
import { useAdminIndustriesQuery, useAdminIndustryPaginationQuery } from '@biztobiz/shared/util-sdk'
import { RESET } from 'jotai/utils'

interface WebAdminIndustryListProps {
  userId?: string
  chapterId?: string
  referralId?: string
}

export function WebAdminIndustryList(props: WebAdminIndustryListProps) {
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

  const { data: industries } = useAdminIndustriesQuery({
    variables,
  })

  const { data: pagination } = useAdminIndustryPaginationQuery({
    variables,
  })

  useLayoutEffect(() => {
    setCurrentPath({
      path: '/admin/industries',
      name: 'Industries',
      description: 'View and manage all industries in your organization',
      showSearch: true,
      actionText: 'Add Industry',
      actionLink: '/admin/industry/new',
    })

    return () => {
      setCurrentPath(RESET)
    }
  }, [])

  return (
    <>
      <WebUiDataTableFeature
        data={industries?.industries}
        path={'/admin/industry'}
        fields={['name']}
        pagination={pagination?.counters}
        setSkip={setSkip}
      />
      {isDev && industries?.industries ? <WebUiDevDataFeature data={industries} /> : null}
    </>
  )
}
