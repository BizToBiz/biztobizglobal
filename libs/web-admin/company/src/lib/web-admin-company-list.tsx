import React, { useLayoutEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { currentPathAtom, isDevAtom, searchAtom } from '@biztobiz/web/global/data-access'
import { WebUiDataTableFeature } from '@biztobiz/web-ui/data-table/feature'
import { WebUiDevDataFeature } from '@biztobiz/web-ui/dev-data/feature'
import { useAdminCompaniesQuery, useAdminCompanyPaginationQuery } from '@biztobiz/shared/util-sdk'
import { RESET } from 'jotai/utils'

interface WebAdminCompanyListProps {
  userId?: string
  chapterId?: string
  referralId?: string
}

export function WebAdminCompanyList(props: WebAdminCompanyListProps) {
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

  const { data: companies } = useAdminCompaniesQuery({
    variables,
  })

  const { data: pagination } = useAdminCompanyPaginationQuery({
    variables,
  })

  useLayoutEffect(() => {
    setCurrentPath({
      path: '/admin/companies',
      name: 'Companies',
      description: 'View and manage all companies in your organization',
      showSearch: true,
      actionText: 'Add Company',
      actionLink: '/admin/company/new',
    })

    return () => {
      setCurrentPath(RESET)
    }
  }, [])

  return (
    <>
      <WebUiDataTableFeature
        data={companies?.companies}
        path={'/admin/company'}
        fields={['name']}
        pagination={pagination?.counters}
        setSkip={setSkip}
      />
      {isDev && companies?.companies ? <WebUiDevDataFeature data={companies} /> : null}
    </>
  )
}
