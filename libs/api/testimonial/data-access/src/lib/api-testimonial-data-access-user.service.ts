import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { Prisma } from '@prisma/client'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { UserCreateTestimonialInput } from './dto/user-create-testimonial.input'
import { UserListTestimonialInput } from './dto/user-list-testimonial.input'
import { UserUpdateTestimonialInput } from './dto/user-update-testimonial.input'

@Injectable()
export class ApiTestimonialDataAccessUserService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = ['text']
  private where(input: UserListTestimonialInput): Prisma.TestimonialWhereInput {
    const query = input?.search?.trim()
    const terms: string[] = query?.includes(' ') ? query.split(' ') : [query]

    // TODO: implement leader search query
    // function leaderSearch() {}

    function relationalSearch() {
      // TODO: implement relational search for testimonial
      // if (input?.regionId) {
      //   return { regionId: input.regionId }
      // }
      // if (input?.memberId) {
      //   return { members: { some: { id: input.memberId } } }
      // }
      return null
    }
    return {
      AND: [
        relationalSearch(),
        ...terms.map((term) => ({
          OR: this.searchFields.map((field) => ({ [field]: { contains: term, mode: Prisma.QueryMode.insensitive } })),
        })),
      ],
    }
  }

  userTestimonials(info: GraphQLResolveInfo, userId: string, input?: UserListTestimonialInput) {
    const select = new PrismaSelect(info).value
    return this.data.testimonial.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
    })
  }

  async userCountTestimonials(userId: string, input?: UserListTestimonialInput): Promise<CorePaging> {
    const total = await this.data.testimonial.count()
    const count = await this.data.testimonial.count({ where: this.where(input) })
    const take = input?.take || 10
    const skip = input?.skip || 0
    const page = Math.floor(skip / take)
    return {
      take,
      skip,
      page,
      count,
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
      data: { ...input },
      ...select,
    })
  }

  userUpdateTestimonial(info: GraphQLResolveInfo, userId: string, testimonialId, input: UserUpdateTestimonialInput) {
    const select = new PrismaSelect(info).value
    return this.data.testimonial.update({
      where: { id: testimonialId },
      data: { ...input },
      ...select,
    })
  }

  userDeleteTestimonial(info: GraphQLResolveInfo, userId: string, testimonialId) {
    return this.data.testimonial.delete({ where: { id: testimonialId } })
  }
}
