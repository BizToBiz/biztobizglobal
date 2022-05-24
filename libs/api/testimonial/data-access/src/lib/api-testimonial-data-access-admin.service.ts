import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging, CorePagingInput } from '@biztobiz/api/core/data-access'

import { AdminCreateTestimonialInput } from './dto/admin-create-testimonial.input'
import { AdminListTestimonialInput } from './dto/admin-list-testimonial.input'
import { AdminUpdateTestimonialInput } from './dto/admin-update-testimonial.input'

@Injectable()
export class ApiTestimonialDataAccessAdminService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  adminTestimonials(info: GraphQLResolveInfo, adminId: string, input?: AdminListTestimonialInput) {
    const select = new PrismaSelect(info).value
    return this.data.testimonial.findMany({
      take: input?.limit,
      skip: input?.skip,
      ...select,
    })
  }

  async adminCountTestimonials(adminId: string, input?: AdminListTestimonialInput): Promise<CorePaging> {
    const total = await this.data.testimonial.count()
    return {
      limit: input?.limit,
      skip: input?.skip,
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
      data: { name: input.name },
      ...select,
    })
  }

  adminUpdateTestimonial(info: GraphQLResolveInfo, adminId: string, testimonialId, input: AdminUpdateTestimonialInput) {
    const select = new PrismaSelect(info).value
    return this.data.testimonial.update({
      where: { id: testimonialId },
      data: { name: input.name },
      ...select,
    })
  }

  adminDeleteTestimonial(info: GraphQLResolveInfo, adminId: string, testimonialId) {
    return this.data.testimonial.delete({ where: { id: testimonialId } })
  }
}
