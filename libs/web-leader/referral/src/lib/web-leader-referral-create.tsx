import React from 'react'
import { LeaderCreateReferralDocument } from '@biztobiz/shared/util-sdk'
import { referralFields } from './web-leader-referral-helper'
import { WebAdminCreateForm } from '@biztobiz/web-admin/crud-helper'

export function WebLeaderReferralCreate() {
  const pathData = {
    path: '/leader/referrals/new',
    name: 'Create a Referral',
    description: 'Use the form below to add a new referral',
    showSearch: false,
    actionText: 'Back to Dashboard',
    actionLink: '/leader/dashboard',
  }

  return (
    <WebAdminCreateForm
      pathData={pathData}
      document={LeaderCreateReferralDocument}
      navigateTo={'/leader/referral'}
      mutationName={'createReferral'}
      buttonText={' Referral'}
      fields={referralFields}
    />
  )
}
