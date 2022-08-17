import React, { useLayoutEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { currentPathAtom, isDevAtom, searchAtom } from '@biztobiz/web/global/data-access'
import { WebUiDataTableFeature } from '@biztobiz/web-ui/data-table/feature'
import { WebUiDevDataFeature } from '@biztobiz/web-ui/dev-data/feature'
import { useAdminUsersQuery } from '@biztobiz/shared/util-sdk'
import { RESET } from 'jotai/utils'

export function WebAdminUserList() {
  const [, setCurrentPath] = useAtom(currentPathAtom)
  const [search] = useAtom(searchAtom)
  const [isDev] = useAtom(isDevAtom)
  const [skip, setSkip] = useState(0)

  const { data: users } = useAdminUsersQuery({
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
        pagination={users?.counters}
        setSkip={setSkip}
      />
      {isDev && users?.users ? <WebUiDevDataFeature data={users} /> : null}
    </>
  )
}
