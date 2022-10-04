import React from 'react'
import { AdminCreateTestimonialDocument } from '@biztobiz/shared/util-sdk'
import { testimonialFields } from './web-admin-testimonial-helper'
import { WebAdminCreateForm } from '@biztobiz/web-admin/crud-helper'

export function WebAdminTestimonialCreate() {
  const pathData = {
    path: '/admin/testimonials/new',
    name: 'Create a Testimonial',
    description: 'Use the form below to add a new Testimonial',
    showSearch: false,
    actionText: 'Back to Testimonial List',
    actionLink: '/admin/testimonials',
  }

  return (
    <WebAdminCreateForm
      pathData={pathData}
      document={AdminCreateTestimonialDocument}
      navigateTo={'/admin/testimonial'}
      mutationName={'createTestimonial'}
      buttonText={' Testimonial'}
      fields={testimonialFields}
    />
  )
}
