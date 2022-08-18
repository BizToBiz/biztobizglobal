import React from 'react'
import { AdminCreateMeetingDocument } from '@biztobiz/shared/util-sdk'
import { meetingFields, meetingSelectFields } from './web-admin-meeting-helper'
import { WebAdminCreateForm } from '@biztobiz/web-admin/crud-helper'

export function WebAdminMeetingCreate() {
  const pathData = {
    path: '/admin/meetings/new',
    name: 'Create a Meeting',
    description: 'Use the form below to add a new Meeting',
    showSearch: false,
    actionText: 'Back to Meeting List',
    actionLink: '/admin/meetings',
  }

  return (
    <WebAdminCreateForm
      pathData={pathData}
      document={AdminCreateMeetingDocument}
      navigateTo={'/admin/meeting'}
      mutationName={'createMeeting'}
      buttonText={' Meeting'}
      fields={meetingFields}
      selectFields={meetingSelectFields}
    />
  )
}
