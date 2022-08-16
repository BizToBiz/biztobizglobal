import React from 'react'
import { AdminCreateReferralDocument } from '@biztobiz/shared/util-sdk'
import { WebAdminCreateForm } from '@biztobiz/web-admin/crud-helper'
import { referralFields } from './web-admin-referral-helper'

export function WebAdminReferralCreate() {
  const pathData = {
    path: '/admin/referrals/new',
    name: 'Create a Referral',
    description: 'Use the form below to add a new referral',
    showSearch: false,
    actionText: 'Back to Referral List',
    actionLink: '/admin/referral',
  }

  return (
    <WebAdminCreateForm
      pathData={pathData}
      document={AdminCreateReferralDocument}
      navigateTo={'/admin/referral'}
      mutationName={'createReferral'}
      buttonText={' Referral'}
      fields={referralFields}
    />
  )
}
