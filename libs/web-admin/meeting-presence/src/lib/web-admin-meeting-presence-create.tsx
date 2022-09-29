import React from 'react'
import { AdminCreateMeetingPresenceDocument } from '@biztobiz/shared/util-sdk'
import { meetingPresenceFields } from './web-admin-meeting-presence-helper'
import { WebAdminCreateForm } from '@biztobiz/web-admin/crud-helper'

export function WebAdminMeetingPresenceCreate() {
  const pathData = {
    path: '/admin/meeting-presences/new',
    name: 'Create a Meeting Presence',
    description: 'Use the form below to add a new Meeting Presence',
    showSearch: false,
    actionText: 'Back to Meeting Presence List',
    actionLink: '/admin/meeting-presences',
  }

  return (
    <WebAdminCreateForm
      pathData={pathData}
      document={AdminCreateMeetingPresenceDocument}
      navigateTo={'/admin/meeting-presence'}
      mutationName={'createMeetingPresence'}
      buttonText={' Meeting Presence'}
      fields={meetingPresenceFields}
    />
  )
}
