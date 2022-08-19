import React from 'react'
import { AdminCreateMeetingPresenceDocument } from '@biztobiz/shared/util-sdk'
import { meetingPresenceFields } from './web-admin-meeting-presence-helper'
import { WebAdminCreateForm } from '@biztobiz/web-admin/crud-helper'

export function WebAdminMeetingPresenceCreate() {
  const pathData = {
    path: '/admin/meeting-presences/new',
    name: 'Create a MeetingPresence',
    description: 'Use the form below to add a new MeetingPresence',
    showSearch: false,
    actionText: 'Back to MeetingPresence List',
    actionLink: '/admin/meeting-presences',
  }

  return (
    <WebAdminCreateForm
      pathData={pathData}
      document={AdminCreateMeetingPresenceDocument}
      navigateTo={'/admin/meeting-presence'}
      mutationName={'createMeetingPresence'}
      buttonText={' MeetingPresence'}
      fields={meetingPresenceFields}
    />
  )
}
