import React, { useLayoutEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { currentPathAtom, isDevAtom, searchAtom } from '@biztobiz/web/global/data-access'
import { WebUiDataTableFeature } from '@biztobiz/web-ui/data-table/feature'
import { WebUiDevDataFeature } from '@biztobiz/web-ui/dev-data/feature'
import { useAdminUploadsQuery, useAdminUploadPaginationQuery } from '@biztobiz/shared/util-sdk'
import { RESET } from 'jotai/utils'

interface WebAdminUploadListProps {
  userId?: string
  chapterId?: string
  referralId?: string
}

export function WebAdminUploadList(props: WebAdminUploadListProps) {
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

  const { data: uploads } = useAdminUploadsQuery({
    variables,
  })

  const { data: pagination } = useAdminUploadPaginationQuery({
    variables,
  })

  useLayoutEffect(() => {
    setCurrentPath({
      path: '/admin/uploads',
      name: 'Uploads',
      description: 'View and manage all uploads in your organization',
      showSearch: true,
      actionText: 'Add Upload',
      actionLink: '/admin/upload/new',
    })

    return () => {
      setCurrentPath(RESET)
    }
  }, [])

  return (
    <>
      <WebUiDataTableFeature
        data={uploads?.uploads}
        path={'/admin/upload'}
        fields={['name']}
        pagination={pagination?.counters}
        setSkip={setSkip}
      />
      {isDev && uploads?.uploads ? <WebUiDevDataFeature data={uploads} /> : null}
    </>
  )
}
