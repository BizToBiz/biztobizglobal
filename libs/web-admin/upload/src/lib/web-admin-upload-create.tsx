import React from 'react'
import { AdminCreateUploadDocument } from '@biztobiz/shared/util-sdk'
import { uploadFields } from './web-admin-upload-helper'
import { WebAdminCreateForm } from '@biztobiz/web-admin/crud-helper'

export function WebAdminUploadCreate() {
  const pathData = {
    path: '/admin/uploads/new',
    name: 'Create a Upload',
    description: 'Use the form below to add a new Upload',
    showSearch: false,
    actionText: 'Back to Upload List',
    actionLink: '/admin/uploads',
  }

  return (
    <WebAdminCreateForm
      pathData={pathData}
      document={AdminCreateUploadDocument}
      navigateTo={'/admin/upload'}
      mutationName={'createUpload'}
      buttonText={' Upload'}
      fields={uploadFields}
    />
  )
}
