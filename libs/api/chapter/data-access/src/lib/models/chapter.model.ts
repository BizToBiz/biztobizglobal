import { Field, ObjectType } from '@nestjs/graphql'
import { ChapterStatus, DayOfWeek } from '@biztobiz/api/enums/data-access'
import { Upload } from '@biztobiz/api/upload/data-access'
import { SubstituteGroup } from '@biztobiz/api/substitute-group/data-access'
import { Region } from '@biztobiz/api/region/data-access'
import { ChapterMember } from '@biztobiz/api/chapter-member/data-access'
import { Meeting } from '@biztobiz/api/meeting/data-access'
import { Transaction } from '@biztobiz/api/transaction/data-access'
import { Referral } from '@biztobiz/api/referral/data-access'
import { AttendanceReminder } from '@biztobiz/api/attendance-reminder/data-access'

@ObjectType()
export class Chapter {
  @Field({ nullable: true })
  id?: string

  @Field({ nullable: true })
  createdAt?: Date

  @Field({ nullable: true })
  updatedAt?: Date

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

  @Field(() => [Meeting], { nullable: true })
  meetings?: Meeting[]

  @Field(() => [ChapterMember], { nullable: true })
  members?: ChapterMember[]

  @Field(() => [Transaction], { nullable: true })
  transactions?: Transaction[]

  @Field(() => [Referral], { nullable: true })
  referralsFrom?: Referral[]

  @Field(() => [Referral], { nullable: true })
  referralsTo?: Referral[]

  @Field(() => SubstituteGroup, { nullable: true })
  substituteGroup?: SubstituteGroup

  @Field(() => Region, { nullable: true })
  region?: Omit<[Region], ''>

  @Field(() => [AttendanceReminder], { nullable: true })
  attendanceReminders?: AttendanceReminder[]

  @Field(() => Upload, { nullable: true })
  avatar?: Upload
}
