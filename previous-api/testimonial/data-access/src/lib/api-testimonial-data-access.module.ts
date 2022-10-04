import { Module } from '@nestjs/common'
import { ApiCoreDataAccessModule } from '@biztobiz/api/core/data-access'

import { ApiTestimonialDataAccessAdminService } from './api-testimonial-data-access-admin.service'
import { ApiTestimonialDataAccessPublicService } from './api-testimonial-data-access-public.service'
import { ApiTestimonialDataAccessUserService } from './api-testimonial-data-access-user.service'

@Module({
  imports: [ApiCoreDataAccessModule],
  providers: [
    ApiTestimonialDataAccessAdminService,
    ApiTestimonialDataAccessPublicService,
    ApiTestimonialDataAccessUserService,
  ],
  exports: [
    ApiTestimonialDataAccessAdminService,
    ApiTestimonialDataAccessPublicService,
    ApiTestimonialDataAccessUserService,
  ],
})
export class ApiTestimonialDataAccessModule {}
