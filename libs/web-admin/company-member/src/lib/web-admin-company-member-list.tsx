import React, { useLayoutEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { currentPathAtom, isDevAtom, searchAtom } from '@biztobiz/web/global/data-access'
import { WebUiDataTableFeature } from '@biztobiz/web-ui/data-table/feature'
import { WebUiDevDataFeature } from '@biztobiz/web-ui/dev-data/feature'
import { useAdminCompanyMemberPaginationQuery, useAdminCompanyMembersQuery } from '@biztobiz/shared/util-sdk'
import { RESET } from 'jotai/utils'

interface WebAdminCompanyMemberListProps {
  userId?: string
  chapterId?: string
  referralId?: string
}

export function WebAdminCompanyMemberList(props: WebAdminCompanyMemberListProps) {
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

  const { data: companyMembers } = useAdminCompanyMembersQuery({
    variables,
  })

  const { data: pagination } = useAdminCompanyMemberPaginationQuery({
    variables,
  })

  useLayoutEffect(() => {
    setCurrentPath({
      path: '/admin/company-members',
      name: 'Company Members',
      description: 'View and manage all company members in your organization',
      showSearch: true,
      actionText: 'Add Company Member',
      actionLink: '/admin/company-member/new',
    })

    return () => {
      setCurrentPath(RESET)
    }
  }, [])

  return (
    <>
      <WebUiDataTableFeature
        data={companyMembers?.companyMembers}
        path={'/admin/company-member'}
        fields={['name']}
        pagination={pagination?.counters}
        setSkip={setSkip}
      />
      {isDev && companyMembers?.companyMembers ? <WebUiDevDataFeature data={companyMembers} /> : null}
    </>
  )
}
