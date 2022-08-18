import React from 'react'
import { useAtom } from 'jotai'
import { isDevAtom } from '@biztobiz/web/global/data-access'
import {
  AdminDeleteMeetingPresenceDocument,
  AdminUpdateMeetingPresenceDocument,
  useAdminMeetingPresenceQuery,
} from '@biztobiz/shared/util-sdk'
import { useParams } from 'react-router-dom'
import { cleanDatabaseOutput } from '@biztobiz/shared/utils/feature'
import { meetingPresenceFields, meetingPresenceSelectFields } from './web-admin-meeting-presence-helper'
import { WebAdminUpdateForm } from '@biztobiz/web-admin/crud-helper'

export function WebAdminMeetingPresenceUpdate() {
  const params = useParams()
  const [isDev] = useAtom(isDevAtom)

  const { data: meetingPresence, loading } = useAdminMeetingPresenceQuery({
    skip: !params?.['id'],
    variables: {
      meetingPresenceId: params?.['id'] ?? 'NoId',
    },
  })

  if (!params?.['id']) return <div>No Id</div>

  function defaultValues() {
    if (meetingPresence?.meetingPresence && !loading) {
      return cleanDatabaseOutput(meetingPresence.meetingPresence, meetingPresenceSelectFields)
    } else {
      return undefined
    }
  }

  const pathData = {
    path: '/admin/meeting-presence/:id',
    name: 'Edit MeetingPresence',
    description: 'Update the information for this meeting-presence',
    showSearch: false,
    actionText: 'Back to MeetingPresence List',
    actionLink: '/admin/meeting-presences',
  }

  return (
    <WebAdminUpdateForm
      pathData={pathData}
      id={params['id']}
      defaultValues={defaultValues()}
      document={AdminUpdateMeetingPresenceDocument}
      deleteDocument={AdminDeleteMeetingPresenceDocument}
      buttonText={'MeetingPresence'}
      fields={meetingPresenceFields}
      idName={'meetingPresenceId'}
      selectFields={meetingPresenceSelectFields}
    />
  )
}
