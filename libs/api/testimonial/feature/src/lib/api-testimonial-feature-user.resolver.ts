import { Args, Mutation, Query, Resolver, Info } from '@nestjs/graphql'
import { GraphQLResolveInfo } from 'graphql'
import {
  UserCreateTestimonialInput,
  UserListTestimonialInput,
  UserUpdateTestimonialInput,
  ApiTestimonialDataAccessUserService,
  Testimonial,
} from '@biztobiz/api/testimonial/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser } from '@biztobiz/api/auth/util'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
export class ApiTestimonialFeatureUserResolver {
  constructor(private readonly service: ApiTestimonialDataAccessUserService) {}

  @Query(() => [Testimonial], { nullable: true })
  userTestimonials(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => UserListTestimonialInput, nullable: true }) input?: UserListTestimonialInput,
  ) {
    return this.service.userTestimonials(info, user.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  userCountTestimonials(
    @CtxUser() user: User,
    @Args({ name: 'input', type: () => UserListTestimonialInput, nullable: true }) input?: UserListTestimonialInput,
  ) {
    return this.service.userCountTestimonials(user.id, input)
  }

  @Query(() => Testimonial, { nullable: true })
  userTestimonial(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('testimonialId') testimonialId: string,
  ) {
    return this.service.userTestimonial(info, user.id, testimonialId)
  }

  @Mutation(() => Testimonial, { nullable: true })
  userCreateTestimonial(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: UserCreateTestimonialInput,
  ) {
    return this.service.userCreateTestimonial(info, user.id, input)
  }

  @Mutation(() => Testimonial, { nullable: true })
  userUpdateTestimonial(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('testimonialId') testimonialId: string,
    @Args('input') input: UserUpdateTestimonialInput,
  ) {
    return this.service.userUpdateTestimonial(info, user.id, testimonialId, input)
  }

  @Mutation(() => Testimonial, { nullable: true })
  userDeleteTestimonial(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('testimonialId') testimonialId: string,
  ) {
    return this.service.userDeleteTestimonial(info, user.id, testimonialId)
  }
}
