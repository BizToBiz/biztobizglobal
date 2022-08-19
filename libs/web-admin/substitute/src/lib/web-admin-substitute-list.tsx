import React, { useLayoutEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { currentPathAtom, isDevAtom, searchAtom } from '@biztobiz/web/global/data-access'
import { WebUiDataTableFeature } from '@biztobiz/web-ui/data-table/feature'
import { WebUiDevDataFeature } from '@biztobiz/web-ui/dev-data/feature'
import { useAdminSubstitutesQuery, useAdminSubstitutePaginationQuery } from '@biztobiz/shared/util-sdk'
import { RESET } from 'jotai/utils'

interface WebAdminSubstituteListProps {
  userId?: string
  chapterId?: string
  referralId?: string
}

export function WebAdminSubstituteList(props: WebAdminSubstituteListProps) {
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

  const { data: substitutes } = useAdminSubstitutesQuery({
    variables,
  })

  const { data: pagination } = useAdminSubstitutePaginationQuery({
    variables,
  })

  useLayoutEffect(() => {
    setCurrentPath({
      path: '/admin/substitutes',
      name: 'Substitutes',
      description: 'View and manage all substitutes in your organization',
      showSearch: true,
      actionText: 'Add Substitute',
      actionLink: '/admin/substitute/new',
    })

    return () => {
      setCurrentPath(RESET)
    }
  }, [])

  return (
    <>
      <WebUiDataTableFeature
        data={substitutes?.substitutes}
        path={'/admin/substitute'}
        fields={['name']}
        pagination={pagination?.counters}
        setSkip={setSkip}
      />
      {isDev && substitutes?.substitutes ? <WebUiDevDataFeature data={substitutes} /> : null}
    </>
  )
}
