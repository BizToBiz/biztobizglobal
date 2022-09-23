import React from 'react'
import { useAtom } from 'jotai'
import { isDevAtom } from '@biztobiz/web/global/data-access'
import {
  LeaderDeleteReferralDocument,
  LeaderUpdateReferralDocument,
  useLeaderReferralQuery,
} from '@biztobiz/shared/util-sdk'
import { useParams } from 'react-router-dom'
import { cleanDatabaseOutput } from '@biztobiz/shared/utils/feature'
import { referralFields } from './web-leader-referral-helper'
import { WebAdminUpdateForm } from '@biztobiz/web-admin/crud-helper'

export function WebLeaderReferralUpdate() {
  const params = useParams()
  const [isDev] = useAtom(isDevAtom)

  const { data: referral, loading } = useLeaderReferralQuery({
    skip: !params?.['id'],
    variables: {
      referralId: params?.['id'] ?? 'NoId',
    },
  })

  if (!params?.['id']) return <div>No Id</div>

  function defaultValues() {
    if (referral?.referral && !loading) {
      return cleanDatabaseOutput(referral.referral)
    } else {
      return undefined
    }
  }

  const pathData = {
    path: '/leader/referral/:id',
    name: 'Edit Referral',
    description: 'Update the information for this referral',
    showSearch: false,
    actionText: 'Back to Referral List',
    actionLink: '/leader/referrals',
  }

  return (
    <WebAdminUpdateForm
      pathData={pathData}
      id={params['id']}
      defaultValues={defaultValues()}
      document={LeaderUpdateReferralDocument}
      deleteDocument={LeaderDeleteReferralDocument}
      buttonText={'Referral'}
      fields={referralFields}
      idName={'referralId'}
    />
  )
}
