import React from 'react'
import { useAtom } from 'jotai'
import { isDevAtom } from '@biztobiz/web/global/data-access'
import {
  AdminDeleteReferralDocument,
  AdminUpdateReferralDocument,
  useAdminReferralQuery,
} from '@biztobiz/shared/util-sdk'
import { useParams } from 'react-router-dom'
import { cleanDatabaseOutput } from '@biztobiz/shared/utils/feature'
import { referralFields, referralSelectFields } from './web-admin-referral-helper'
import { WebAdminUpdateForm } from '@biztobiz/web-admin/crud-helper'

export function WebAdminReferralUpdate() {
  const params = useParams()
  const [isDev] = useAtom(isDevAtom)

  const { data: referral, loading } = useAdminReferralQuery({
    skip: !params?.['id'],
    variables: {
      referralId: params?.['id'] ?? 'NoId',
    },
  })

  if (!params?.['id']) return <div>No Id</div>

  function defaultValues() {
    if (referral?.referral && !loading) {
      return cleanDatabaseOutput(referral.referral, referralSelectFields)
    } else {
      return undefined
    }
  }

  const pathData = {
    path: '/admin/referral/:id',
    name: 'Edit Referral',
    description: 'Update the information for this referral',
    showSearch: false,
    actionText: 'Back to Referral List',
    actionLink: '/admin/referrals',
  }

  return (
    <WebAdminUpdateForm
      pathData={pathData}
      id={params['id']}
      defaultValues={defaultValues()}
      document={AdminUpdateReferralDocument}
      deleteDocument={AdminDeleteReferralDocument}
      buttonText={'Referral'}
      fields={referralFields}
      idName={'referralId'}
      selectFields={referralSelectFields}
    />
  )
}
