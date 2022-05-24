import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging, CorePagingInput } from '@biztobiz/api/core/data-access'

import { UserCreateTestimonialInput } from './dto/user-create-testimonial.input'
import { UserListTestimonialInput } from './dto/user-list-testimonial.input'
import { UserUpdateTestimonialInput } from './dto/user-update-testimonial.input'

@Injectable()
export class ApiTestimonialDataAccessUserService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  userTestimonials(info: GraphQLResolveInfo, userId: string, input?: UserListTestimonialInput) {
    const select = new PrismaSelect(info).value
    return this.data.testimonial.findMany({
      take: input?.limit,
      skip: input?.skip,
      ...select,
    })
  }

  async userCountTestimonials(userId: string, input?: UserListTestimonialInput): Promise<CorePaging> {
    const total = await this.data.testimonial.count()
    return {
      limit: input?.limit,
      skip: input?.skip,
      total,
    }
  }

  userTestimonial(info: GraphQLResolveInfo, userId: string, testimonialId) {
    const select = new PrismaSelect(info).value
    return this.data.testimonial.findUnique({ where: { id: testimonialId }, ...select })
  }

  userCreateTestimonial(info: GraphQLResolveInfo, userId: string, input: UserCreateTestimonialInput) {
    const select = new PrismaSelect(info).value
    return this.data.testimonial.create({
      data: { name: input.name },
      ...select,
    })
  }

  userUpdateTestimonial(info: GraphQLResolveInfo, userId: string, testimonialId, input: UserUpdateTestimonialInput) {
    const select = new PrismaSelect(info).value
    return this.data.testimonial.update({
      where: { id: testimonialId },
      data: { name: input.name },
      ...select,
    })
  }

  userDeleteTestimonial(info: GraphQLResolveInfo, userId: string, testimonialId) {
    return this.data.testimonial.delete({ where: { id: testimonialId } })
  }
}
