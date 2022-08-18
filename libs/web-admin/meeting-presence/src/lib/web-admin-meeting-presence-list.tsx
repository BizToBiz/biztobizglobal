import React, { useLayoutEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { currentPathAtom, isDevAtom, searchAtom } from '@biztobiz/web/global/data-access'
import { WebUiDataTableFeature } from '@biztobiz/web-ui/data-table/feature'
import { WebUiDevDataFeature } from '@biztobiz/web-ui/dev-data/feature'
import { useAdminMeetingPresencePaginationQuery, useAdminMeetingPresencesQuery } from '@biztobiz/shared/util-sdk'
import { RESET } from 'jotai/utils'

interface WebAdminMeetingPresenceListProps {
  userId?: string
  chapterId?: string
  referralId?: string
}

export function WebAdminMeetingPresenceList(props: WebAdminMeetingPresenceListProps) {
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

  const { data: meetingPresences } = useAdminMeetingPresencesQuery({
    variables,
  })

  const { data: pagination } = useAdminMeetingPresencePaginationQuery({
    variables,
  })

  useLayoutEffect(() => {
    setCurrentPath({
      path: '/admin/meeting-presences',
      name: 'MeetingPresences',
      description: 'View and manage all Meeting Presences in your organization',
      showSearch: true,
      actionText: 'Add MeetingPresence',
      actionLink: '/admin/meeting-presence/new',
    })

    return () => {
      setCurrentPath(RESET)
    }
  }, [])

  return (
    <>
      <WebUiDataTableFeature
        data={meetingPresences?.meetingPresences}
        path={'/admin/meeting-presence'}
        fields={['name']}
        pagination={pagination?.counters}
        setSkip={setSkip}
      />
      {isDev && meetingPresences?.meetingPresences ? <WebUiDevDataFeature data={meetingPresences} /> : null}
    </>
  )
}
