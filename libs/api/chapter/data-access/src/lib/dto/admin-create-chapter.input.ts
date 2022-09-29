import { Field, InputType } from '@nestjs/graphql'
import { ChapterStatus, DayOfWeek } from '@biztobiz/api/enums/data-access'
import { MultiSelectInput } from '@biztobiz/api/core/data-access'

@InputType()
export class AdminCreateChapterInput {
  @Field({ nullable: true })
  establishedDate?: Date

  @Field({ nullable: true })
  name?: string

  @Field({ nullable: true })
  description?: string

  @Field({ nullable: true })
  avatarEmail?: string

  @Field({ nullable: true })
  avatarUrl?: string
  @Field({ nullable: true })
  latitude?: string

  @Field({ nullable: true })
  longitude?: string

  @Field({ nullable: true })
  city?: string

  @Field({ nullable: true })
  state?: string

  @Field({ nullable: true })
  facebook?: string

  @Field(() => DayOfWeek, { nullable: true })
  meetingDay?: DayOfWeek

  @Field({ nullable: true })
  meetingTime?: string

  @Field({ nullable: true })
  meetingDetails?: string

  @Field(() => ChapterStatus, { nullable: true })
  status?: ChapterStatus

  @Field(() => [MultiSelectInput], { nullable: true })
  meetings?: MultiSelectInput[]

  @Field(() => [MultiSelectInput], { nullable: true })
  members?: MultiSelectInput[]

  @Field(() => [MultiSelectInput], { nullable: true })
  transactions?: MultiSelectInput[]

  @Field(() => [MultiSelectInput], { nullable: true })
  referralsFrom?: MultiSelectInput[]

  @Field(() => [MultiSelectInput], { nullable: true })
  referralsTo?: MultiSelectInput[]

  @Field({ nullable: true })
  substituteGroupId?: string

  @Field({ nullable: true })
  regionId?: string

  @Field(() => [MultiSelectInput], { nullable: true })
  attendanceReminders?: MultiSelectInput[]

  @Field({ nullable: true })
  avatarId: string
}
