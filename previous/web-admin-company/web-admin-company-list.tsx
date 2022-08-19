import React, { useLayoutEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { currentPathAtom, isDevAtom, searchAtom } from '@biztobiz/web/global/data-access'
import { WebUiDataTableFeature } from '@biztobiz/web-ui/data-table/feature'
import { WebUiDevDataFeature } from '@biztobiz/web-ui/dev-data/feature'
import { RESET } from 'jotai/utils'
import { useAdminCompaniesQuery } from '@biztobiz/shared/util-sdk'

export function WebAdminCompanyList() {
  const [, setCurrentPath] = useAtom(currentPathAtom)
  const [search] = useAtom(searchAtom)
  const [isDev] = useAtom(isDevAtom)
  const [skip, setSkip] = useState(0)

  const { data: companies } = useAdminCompaniesQuery({
    variables: {
      input: {
        take: 20,
        skip,
        search,
      },
    },
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
        fields={['name', 'status']}
        pagination={companies?.counters}
        setSkip={setSkip}
      />
      {isDev && companies?.companies ? <WebUiDevDataFeature data={companies} /> : null}
    </>
  )
}
