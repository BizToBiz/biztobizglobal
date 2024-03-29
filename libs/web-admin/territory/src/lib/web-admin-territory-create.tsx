import React from 'react'
import { AdminCreateTerritoryDocument } from '@biztobiz/shared/util-sdk'
import { territoryFields } from './web-admin-territory-helper'
import { WebAdminCreateForm } from '@biztobiz/web-admin/crud-helper'

export function WebAdminTerritoryCreate() {
  const pathData = {
    path: '/admin/territories/new',
    name: 'Create a Territory',
    description: 'Use the form below to add a new Territory',
    showSearch: false,
    actionText: 'Back to Territory List',
    actionLink: '/admin/territories',
  }

  return (
    <WebAdminCreateForm
      pathData={pathData}
      document={AdminCreateTerritoryDocument}
      navigateTo={'/admin/territory'}
      mutationName={'createTerritory'}
      buttonText={' Territory'}
      fields={territoryFields}
    />
  )
}
