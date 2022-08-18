import React from 'react'
import { useAtom } from 'jotai'
import { isDevAtom } from '@biztobiz/web/global/data-access'
import {
  AdminDeleteNotificationDocument,
  AdminUpdateNotificationDocument,
  useAdminNotificationQuery,
} from '@biztobiz/shared/util-sdk'
import { useParams } from 'react-router-dom'
import { cleanDatabaseOutput } from '@biztobiz/shared/utils/feature'
import { notificationFields, notificationSelectFields } from './web-admin-notification-helper'
import { WebAdminUpdateForm } from '@biztobiz/web-admin/crud-helper'

export function WebAdminNotificationUpdate() {
  const params = useParams()
  const [isDev] = useAtom(isDevAtom)

  const { data: notification, loading } = useAdminNotificationQuery({
    skip: !params?.['id'],
    variables: {
      notificationId: params?.['id'] ?? 'NoId',
    },
  })

  if (!params?.['id']) return <div>No Id</div>

  function defaultValues() {
    if (notification?.notification && !loading) {
      return cleanDatabaseOutput(notification.notification, notificationSelectFields)
    } else {
      return undefined
    }
  }

  const pathData = {
    path: '/admin/notification/:id',
    name: 'Edit Notification',
    description: 'Update the information for this notification',
    showSearch: false,
    actionText: 'Back to Notification List',
    actionLink: '/admin/notifications',
  }

  return (
    <WebAdminUpdateForm
      pathData={pathData}
      id={params['id']}
      defaultValues={defaultValues()}
      document={AdminUpdateNotificationDocument}
      deleteDocument={AdminDeleteNotificationDocument}
      buttonText={'Notification'}
      fields={notificationFields}
      idName={'notificationId'}
      selectFields={notificationSelectFields}
    />
  )
}
