import { Args, Mutation, Query, Resolver, Info } from '@nestjs/graphql'
import { GraphQLResolveInfo } from 'graphql'
import {
  AdminCreateTestimonialInput,
  AdminListTestimonialInput,
  AdminUpdateTestimonialInput,
  ApiTestimonialDataAccessLeaderService,
  Testimonial,
} from '@biztobiz/api/testimonial/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser, GqlAuthGuard } from '@biztobiz/api/auth/util'
import { UseGuards } from '@nestjs/common'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthGuard)
export class ApiTestimonialFeatureLeaderResolver {
  constructor(private readonly service: ApiTestimonialDataAccessLeaderService) {}

  @Query(() => [Testimonial], { nullable: true })
  leaderTestimonials(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => AdminListTestimonialInput, nullable: true }) input?: AdminListTestimonialInput,
  ) {
    return this.service.leaderTestimonials(info, leader.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  leaderCountTestimonials(
    @CtxUser() leader: User,
    @Args({ name: 'input', type: () => AdminListTestimonialInput, nullable: true }) input?: AdminListTestimonialInput,
  ) {
    return this.service.leaderCountTestimonials(leader.id, input)
  }

  @Query(() => Testimonial, { nullable: true })
  leaderTestimonial(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('testimonialId') testimonialId: string,
  ) {
    return this.service.leaderTestimonial(info, leader.id, testimonialId)
  }

  @Mutation(() => Testimonial, { nullable: true })
  leaderCreateTestimonial(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: AdminCreateTestimonialInput,
  ) {
    return this.service.leaderCreateTestimonial(info, leader.id, input)
  }

  @Mutation(() => Testimonial, { nullable: true })
  leaderUpdateTestimonial(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('testimonialId') testimonialId: string,
    @Args('input') input: AdminUpdateTestimonialInput,
  ) {
    return this.service.leaderUpdateTestimonial(info, leader.id, testimonialId, input)
  }

  @Mutation(() => Testimonial, { nullable: true })
  leaderDeleteTestimonial(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('testimonialId') testimonialId: string,
  ) {
    return this.service.leaderDeleteTestimonial(info, leader.id, testimonialId)
  }
}
