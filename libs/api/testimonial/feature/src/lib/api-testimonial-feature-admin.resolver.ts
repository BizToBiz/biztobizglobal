import { Args, Mutation, Query, Resolver, Info } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import { GraphQLResolveInfo } from 'graphql'
import {
  AdminCreateTestimonialInput,
  AdminListTestimonialInput,
  AdminUpdateTestimonialInput,
  ApiTestimonialDataAccessAdminService,
  Testimonial,
} from '@biztobiz/api/testimonial/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser, GqlAuthAdminGuard } from '@biztobiz/api/auth/util'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthAdminGuard)
export class ApiTestimonialFeatureAdminResolver {
  constructor(private readonly service: ApiTestimonialDataAccessAdminService) {}

  @Query(() => [Testimonial], { nullable: true })
  adminTestimonials(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => AdminListTestimonialInput, nullable: true }) input?: AdminListTestimonialInput,
  ) {
    return this.service.adminTestimonials(info, admin.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  adminCountTestimonials(
    @CtxUser() admin: User,
    @Args({ name: 'input', type: () => AdminListTestimonialInput, nullable: true }) input?: AdminListTestimonialInput,
  ) {
    return this.service.adminCountTestimonials(admin.id, input)
  }

  @Query(() => Testimonial, { nullable: true })
  adminTestimonial(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('testimonialId') testimonialId: string,
  ) {
    return this.service.adminTestimonial(info, admin.id, testimonialId)
  }

  @Mutation(() => Testimonial, { nullable: true })
  adminCreateTestimonial(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: AdminCreateTestimonialInput,
  ) {
    return this.service.adminCreateTestimonial(info, admin.id, input)
  }

  @Mutation(() => Testimonial, { nullable: true })
  adminUpdateTestimonial(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('testimonialId') testimonialId: string,
    @Args('input') input: AdminUpdateTestimonialInput,
  ) {
    return this.service.adminUpdateTestimonial(info, admin.id, testimonialId, input)
  }

  @Mutation(() => Testimonial, { nullable: true })
  adminDeleteTestimonial(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('testimonialId') testimonialId: string,
  ) {
    return this.service.adminDeleteTestimonial(info, admin.id, testimonialId)
  }
}
