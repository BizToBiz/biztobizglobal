import React from 'react'
import { useAtom } from 'jotai'
import { isDevAtom } from '@biztobiz/web/global/data-access'
import { AdminDeleteUploadDocument, AdminUpdateUploadDocument, useAdminUploadQuery } from '@biztobiz/shared/util-sdk'
import { useParams } from 'react-router-dom'
import { cleanDatabaseOutput } from '@biztobiz/shared/utils/feature'
import { uploadFields } from './web-admin-upload-helper'
import { WebAdminUpdateForm } from '@biztobiz/web-admin/crud-helper'

export function WebAdminUploadUpdate() {
  const params = useParams()
  const [isDev] = useAtom(isDevAtom)

  const { data: upload, loading } = useAdminUploadQuery({
    skip: !params?.['id'],
    variables: {
      uploadId: params?.['id'] ?? 'NoId',
    },
  })

  if (!params?.['id']) return <div>No Id</div>

  function defaultValues() {
    if (upload?.upload && !loading) {
      return cleanDatabaseOutput(upload.upload, uploadFields)
    } else {
      return undefined
    }
  }

  const pathData = {
    path: '/admin/upload/:id',
    name: 'Edit Upload',
    description: 'Update the information for this upload',
    showSearch: false,
    actionText: 'Back to Upload List',
    actionLink: '/admin/uploads',
  }

  return (
    <WebAdminUpdateForm
      pathData={pathData}
      id={params['id']}
      defaultValues={defaultValues()}
      document={AdminUpdateUploadDocument}
      deleteDocument={AdminDeleteUploadDocument}
      buttonText={'Upload'}
      fields={uploadFields}
      idName={'uploadId'}
    />
  )
}
