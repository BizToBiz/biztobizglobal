import React from 'react'
import { useAtom } from 'jotai'
import { isDevAtom } from '@biztobiz/web/global/data-access'
import {
  AdminDeleteReferralDocument,
  AdminUpdateReferralDocument,
  useAdminReferralQuery,
} from '@biztobiz/shared/util-sdk'
import { useParams } from 'react-router-dom'
import { WebAdminUpdateForm } from '@biztobiz/web-admin/crud-helper'
import { referralFields } from './web-admin-referral-helper'
import { cleanFormInput } from '@biztobiz/shared/utils/feature'

export function WebAdminReferralUpdate() {
  const params = useParams()
  const [isDev] = useAtom(isDevAtom)

  const { data: referral } = useAdminReferralQuery({
    skip: !params?.['id'],
    variables: {
      referralId: params?.['id'] ?? 'NoId',
    },
  })

  if (!params?.['id']) {
    return <div>No Id</div>
  }

  function defaultValues() {
    if (referral?.referral) {
      return cleanFormInput(referral.referral)
    } else {
      return undefined
    }
  }

  const pathData = {
    path: '/admin/referrals/:id',
    name: 'Edit User',
    description: 'Update the information for this referral',
    showSearch: false,
    actionText: 'Back to User List',
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
    />
  )
}
