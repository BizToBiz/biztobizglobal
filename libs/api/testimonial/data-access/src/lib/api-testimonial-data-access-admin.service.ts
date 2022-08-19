import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { Prisma } from '@prisma/client'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { AdminCreateTestimonialInput } from './dto/admin-create-testimonial.input'
import { AdminListTestimonialInput } from './dto/admin-list-testimonial.input'
import { AdminUpdateTestimonialInput } from './dto/admin-update-testimonial.input'

@Injectable()
export class ApiTestimonialDataAccessAdminService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = ['text']
  private where(input: AdminListTestimonialInput): Prisma.TestimonialWhereInput {
    const query = input?.search?.trim()
    const terms: string[] = query?.includes(' ') ? query.split(' ') : [query]

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
          OR: this.searchFields.map((field) => ({ [field]: { contains: term, mode: 'insensitive' } })),
        })),
      ],
    }
  }

  adminTestimonials(info: GraphQLResolveInfo, adminId: string, input?: AdminListTestimonialInput) {
    const select = new PrismaSelect(info).value
    return this.data.testimonial.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
    })
  }

  async adminCountTestimonials(adminId: string, input?: AdminListTestimonialInput): Promise<CorePaging> {
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

  adminTestimonial(info: GraphQLResolveInfo, adminId: string, testimonialId) {
    const select = new PrismaSelect(info).value
    return this.data.testimonial.findUnique({ where: { id: testimonialId }, ...select })
  }

  adminCreateTestimonial(info: GraphQLResolveInfo, adminId: string, input: AdminCreateTestimonialInput) {
    const select = new PrismaSelect(info).value
    return this.data.testimonial.create({
      data: { ...input },
      ...select,
    })
  }

  adminUpdateTestimonial(info: GraphQLResolveInfo, adminId: string, testimonialId, input: AdminUpdateTestimonialInput) {
    const select = new PrismaSelect(info).value
    return this.data.testimonial.update({
      where: { id: testimonialId },
      data: { ...input },
      ...select,
    })
  }

  adminDeleteTestimonial(info: GraphQLResolveInfo, adminId: string, testimonialId) {
    return this.data.testimonial.delete({ where: { id: testimonialId } })
  }
}
