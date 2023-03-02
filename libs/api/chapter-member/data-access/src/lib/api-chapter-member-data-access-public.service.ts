import { Injectable } from '@nestjs/common'
import { ApiCoreDataAccessService } from '@biztobiz/api/core/data-access'

@Injectable()
export class ApiChapterMemberDataAccessPublicService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  chapterMemberName(chapterMember) {
    return this.data.chapterMember
      .findFirst({
        where: { id: chapterMember.id },
        select: { chapter: { select: { name: true } }, member: { select: { firstName: true, lastName: true } } },
      })
      .then((chapterMember) => {
        return `${chapterMember?.chapter?.name} - ${chapterMember?.member?.firstName} ${chapterMember?.member?.lastName}`
      })
  }
}
