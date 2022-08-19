import { Field, InputType } from '@nestjs/graphql'
import { ChapterStatus, DayOfWeek } from '@biztobiz/api/enums/data-access'

@InputType()
export class AdminCreateChapterInput {
  @Field({ nullable: true })
  name?: string

  @Field({ nullable: true })
  description?: string

  @Field({ nullable: true })
  establishedDate?: Date

  @Field(() => DayOfWeek, { nullable: true })
  meetingDay?: DayOfWeek

  @Field({ nullable: true })
  meetingTime?: string

  @Field({ nullable: true })
  meetingDetails?: string

  @Field({ nullable: true })
  city?: string

  @Field({ nullable: true })
  state?: string

  @Field({ nullable: true })
  avatarUrl?: string

  @Field({ nullable: true })
  avatarEmail?: string

  @Field(() => ChapterStatus, { nullable: true })
  status?: ChapterStatus

  @Field({ nullable: true })
  facebook?: string

  @Field({ nullable: true })
  latitude?: string

  @Field({ nullable: true })
  longitude?: string

  @Field({ nullable: true })
  regionId?: string
}
