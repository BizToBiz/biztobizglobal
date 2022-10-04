import { Module } from '@nestjs/common'
import { ApiCoreDataAccessModule } from '@biztobiz/api/core/data-access'

import { ApiTestimonialDataAccessAdminService } from './api-testimonial-data-access-admin.service'
import { ApiTestimonialDataAccessLeaderService } from './api-testimonial-data-access-leader.service'
import { ApiTestimonialDataAccessPublicService } from './api-testimonial-data-access-public.service'
import { ApiTestimonialDataAccessUserService } from './api-testimonial-data-access-user.service'

@Module({
  imports: [ApiCoreDataAccessModule],
  providers: [
    ApiTestimonialDataAccessAdminService,
    ApiTestimonialDataAccessLeaderService,
    ApiTestimonialDataAccessPublicService,
    ApiTestimonialDataAccessUserService,
  ],
  exports: [
    ApiTestimonialDataAccessAdminService,
    ApiTestimonialDataAccessLeaderService,
    ApiTestimonialDataAccessPublicService,
    ApiTestimonialDataAccessUserService,
  ],
})
export class ApiTestimonialDataAccessModule {}
