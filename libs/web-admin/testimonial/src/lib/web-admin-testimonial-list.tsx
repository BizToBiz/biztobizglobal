import React, { useLayoutEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { currentPathAtom, isDevAtom, searchAtom } from '@biztobiz/web/global/data-access'
import { WebUiDataTableFeature } from '@biztobiz/web-ui/data-table/feature'
import { WebUiDevDataFeature } from '@biztobiz/web-ui/dev-data/feature'
import { useAdminTestimonialsQuery, useAdminTestimonialPaginationQuery } from '@biztobiz/shared/util-sdk'
import { RESET } from 'jotai/utils'

interface WebAdminTestimonialListProps {
  userId?: string
  chapterId?: string
  referralId?: string
}

export function WebAdminTestimonialList(props: WebAdminTestimonialListProps) {
  const [, setCurrentPath] = useAtom(currentPathAtom)
  const [search] = useAtom(searchAtom)
  const [isDev] = useAtom(isDevAtom)
  const [skip, setSkip] = useState(0)

  const variables = {
    input: {
      take: 20,
      userId: props?.userId,
      chapterId: props?.chapterId,
      referralId: props?.referralId,
      skip,
      search,
    },
  }

  const { data: testimonials } = useAdminTestimonialsQuery({
    variables,
  })

  const { data: pagination } = useAdminTestimonialPaginationQuery({
    variables,
  })

  useLayoutEffect(() => {
    setCurrentPath({
      path: '/admin/testimonials',
      name: 'Testimonials',
      description: 'View and manage all testimonials in your organization',
      showSearch: true,
      actionText: 'Add Testimonial',
      actionLink: '/admin/testimonial/new',
    })

    return () => {
      setCurrentPath(RESET)
    }
  }, [])

  return (
    <>
      <WebUiDataTableFeature
        data={testimonials?.testimonials}
        path={'/admin/testimonial'}
        fields={['name']}
        pagination={pagination?.counters}
        setSkip={setSkip}
      />
      {isDev && testimonials?.testimonials ? <WebUiDevDataFeature data={testimonials} /> : null}
    </>
  )
}
