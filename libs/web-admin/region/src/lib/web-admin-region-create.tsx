import React from 'react'
import { AdminCreateRegionDocument } from '@biztobiz/shared/util-sdk'
import { regionFields, regionSelectFields } from './web-admin-region-helper'
import { WebAdminCreateForm } from '@biztobiz/web-admin/crud-helper'

export function WebAdminRegionCreate() {
  const pathData = {
    path: '/admin/regions/new',
    name: 'Create a Region',
    description: 'Use the form below to add a new Region',
    showSearch: false,
    actionText: 'Back to Region List',
    actionLink: '/admin/regions',
  }

  return (
    <WebAdminCreateForm
      pathData={pathData}
      document={AdminCreateRegionDocument}
      navigateTo={'/admin/region'}
      mutationName={'createRegion'}
      buttonText={' Region'}
      fields={regionFields}
      selectFields={regionSelectFields}
    />
  )
}
