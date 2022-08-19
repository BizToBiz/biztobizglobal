import React from 'react'
import { useAtom } from 'jotai'
import { isDevAtom } from '@biztobiz/web/global/data-access'
import {
  AdminDeleteTestimonialDocument,
  AdminUpdateTestimonialDocument,
  useAdminTestimonialQuery,
} from '@biztobiz/shared/util-sdk'
import { useParams } from 'react-router-dom'
import { cleanDatabaseOutput } from '@biztobiz/shared/utils/feature'
import { testimonialFields } from './web-admin-testimonial-helper'
import { WebAdminUpdateForm } from '@biztobiz/web-admin/crud-helper'

export function WebAdminTestimonialUpdate() {
  const params = useParams()
  const [isDev] = useAtom(isDevAtom)

  const { data: testimonial, loading } = useAdminTestimonialQuery({
    skip: !params?.['id'],
    variables: {
      testimonialId: params?.['id'] ?? 'NoId',
    },
  })

  if (!params?.['id']) return <div>No Id</div>

  function defaultValues() {
    if (testimonial?.testimonial && !loading) {
      return cleanDatabaseOutput(testimonial.testimonial, testimonialFields)
    } else {
      return undefined
    }
  }

  const pathData = {
    path: '/admin/testimonial/:id',
    name: 'Edit Testimonial',
    description: 'Update the information for this testimonial',
    showSearch: false,
    actionText: 'Back to Testimonial List',
    actionLink: '/admin/testimonials',
  }

  return (
    <WebAdminUpdateForm
      pathData={pathData}
      id={params['id']}
      defaultValues={defaultValues()}
      document={AdminUpdateTestimonialDocument}
      deleteDocument={AdminDeleteTestimonialDocument}
      buttonText={'Testimonial'}
      fields={testimonialFields}
      idName={'testimonialId'}
    />
  )
}
