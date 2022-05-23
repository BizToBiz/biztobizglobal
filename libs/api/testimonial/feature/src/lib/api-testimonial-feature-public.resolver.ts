import { Resolver } from '@nestjs/graphql'
import { ApiTestimonialDataAccessPublicService, Testimonial } from '@biztobiz/api/testimonial/data-access'

@Resolver(() => Testimonial)
export class ApiTestimonialFeaturePublicResolver {
  constructor(private readonly service: ApiTestimonialDataAccessPublicService) {}
}
