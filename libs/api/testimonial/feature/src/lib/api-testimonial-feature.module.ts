import { Module } from '@nestjs/common'
import { ApiTestimonialDataAccessModule } from '@biztobiz/api/testimonial/data-access'

import { ApiTestimonialFeatureAdminResolver } from './api-testimonial-feature-admin.resolver'
import { ApiTestimonialFeaturePublicResolver } from './api-testimonial-feature-public.resolver'
import { ApiTestimonialFeatureUserResolver } from './api-testimonial-feature-user.resolver'

@Module({
  imports: [ApiTestimonialDataAccessModule],
  providers: [
    ApiTestimonialFeatureAdminResolver,
    ApiTestimonialFeaturePublicResolver,
    ApiTestimonialFeatureUserResolver,
  ],
})
export class ApiTestimonialFeatureModule {}
