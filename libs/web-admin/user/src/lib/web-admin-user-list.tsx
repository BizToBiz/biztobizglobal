import React, { useLayoutEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { currentPathAtom, isDevAtom, searchAtom } from '@biztobiz/web/global/data-access'
import { WebUiDataTableFeature } from '@biztobiz/web-ui/data-table/feature'
import { WebUiDevDataFeature } from '@biztobiz/web-ui/dev-data/feature'
import { useAdminUserPaginationQuery, useAdminUsersQuery } from '@biztobiz/shared/util-sdk'
import { RESET } from 'jotai/utils'

interface WebAdminUserListProps {
  userId?: string
  chapterId?: string
  referralId?: string
}

export function WebAdminUserList(props: WebAdminUserListProps) {
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

  const { data: users } = useAdminUsersQuery({
    variables,
  })

  const { data: pagination } = useAdminUserPaginationQuery({
    variables,
  })

  useLayoutEffect(() => {
    setCurrentPath({
      path: '/admin/users',
      name: 'Users',
      description: 'View and manage all users in your organization',
      showSearch: true,
      actionText: 'Add User',
      actionLink: '/admin/user/new',
    })

    return () => {
      setCurrentPath(RESET)
    }
  }, [])

  return (
    <>
      <WebUiDataTableFeature
        data={users?.users}
        path={'/admin/user'}
        fields={['firstName', 'lastName', 'email', 'status']}
        pagination={pagination?.counters}
        setSkip={setSkip}
      />
      {isDev && users?.users ? <WebUiDevDataFeature data={users} /> : null}
    </>
  )
}
