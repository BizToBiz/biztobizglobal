import React from 'react'
import { AdminCreateNotificationDocument } from '@biztobiz/shared/util-sdk'
import { notificationFields, notificationSelectFields } from './web-admin-notification-helper'
import { WebAdminCreateForm } from '@biztobiz/web-admin/crud-helper'

export function WebAdminNotificationCreate() {
  const pathData = {
    path: '/admin/notifications/new',
    name: 'Create a Notification',
    description: 'Use the form below to add a new Notification',
    showSearch: false,
    actionText: 'Back to Notification List',
    actionLink: '/admin/notifications',
  }

  return (
    <WebAdminCreateForm
      pathData={pathData}
      document={AdminCreateNotificationDocument}
      navigateTo={'/admin/notification'}
      mutationName={'createNotification'}
      buttonText={' Notification'}
      fields={notificationFields}
      selectFields={notificationSelectFields}
    />
  )
}
