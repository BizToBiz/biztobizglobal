import { Field, ObjectType } from '@nestjs/graphql'
import { ChapterStatus, DayOfWeek } from '@biztobiz/api/enums/data-access'
import { Upload } from '@biztobiz/api/upload/data-access'

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
  latitude?: string

  @Field({ nullable: true })
  longitude?: string

  @Field({ nullable: true })
  avatarEmail?: string

  @Field({ nullable: true })
  avatarUrl?: string

  @Field({ nullable: true })
  city?: string

  @Field({ nullable: true })
  state?: string

  @Field({ nullable: true })
  facebook?: string

  @Field({ nullable: true })
  meetingDetails?: string

  @Field(() => DayOfWeek, { nullable: true })
  meetingDay?: DayOfWeek

  @Field({ nullable: true })
  meetingTime?: string

  @Field(() => ChapterStatus, { nullable: true })
  status?: ChapterStatus

  // @Field(() => SubstituteGroup, { nullable: true })
  // substituteGroup?: SubstituteGroup
  //
  // @Field(() => Region, { nullable: true })
  // region?: Omit<[Region], ''>

  // @Field(() => [ChapterMember], { nullable: true })
  // members?: ChapterMember[]
  //
  @Field(() => Upload, { nullable: true })
  avatar?: Upload
}
