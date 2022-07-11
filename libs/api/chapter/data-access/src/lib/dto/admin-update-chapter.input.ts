import { Field, InputType } from '@nestjs/graphql'
import { DayOfWeek } from '../models/day-of-week.enum'
import { ChapterStatus } from '../models/chapter-status.enum'

@InputType()
export class AdminUpdateChapterInput {
  @Field({ nullable: true })
  name?: string

  @Field({ nullable: true })
  description?: string

  @Field({ nullable: true })
  establishedDate?: string

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
}
