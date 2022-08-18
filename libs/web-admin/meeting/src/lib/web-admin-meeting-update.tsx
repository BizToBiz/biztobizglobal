import React from 'react'
import { useAtom } from 'jotai'
import { isDevAtom } from '@biztobiz/web/global/data-access'
import { AdminDeleteMeetingDocument, AdminUpdateMeetingDocument, useAdminMeetingQuery } from '@biztobiz/shared/util-sdk'
import { useParams } from 'react-router-dom'
import { cleanDatabaseOutput } from '@biztobiz/shared/utils/feature'
import { meetingFields } from './web-admin-meeting-helper'
import { WebAdminUpdateForm } from '@biztobiz/web-admin/crud-helper'

export function WebAdminMeetingUpdate() {
  const params = useParams()
  const [isDev] = useAtom(isDevAtom)

  const { data: meeting, loading } = useAdminMeetingQuery({
    skip: !params?.['id'],
    variables: {
      meetingId: params?.['id'] ?? 'NoId',
    },
  })

  if (!params?.['id']) return <div>No Id</div>

  function defaultValues() {
    if (meeting?.meeting && !loading) {
      return cleanDatabaseOutput(meeting.meeting, meetingFields)
    } else {
      return undefined
    }
  }

  const pathData = {
    path: '/admin/meeting/:id',
    name: 'Edit Meeting',
    description: 'Update the information for this meeting',
    showSearch: false,
    actionText: 'Back to Meeting List',
    actionLink: '/admin/meetings',
  }

  return (
    <WebAdminUpdateForm
      pathData={pathData}
      id={params['id']}
      defaultValues={defaultValues()}
      document={AdminUpdateMeetingDocument}
      deleteDocument={AdminDeleteMeetingDocument}
      buttonText={'Meeting'}
      fields={meetingFields}
      idName={'meetingId'}
    />
  )
}
