import { Field, ObjectType } from '@nestjs/graphql'
import { Chapter } from '@biztobiz/api/chapter/data-access'
import { MeetingPresence } from '@biztobiz/api/meeting-presence/data-access'
import { Substitute } from '@biztobiz/api/substitute/data-access'

@ObjectType()
export class Meeting {
  @Field({ nullable: true })
  id?: string

  @Field({ nullable: true })
  createdAt?: Date

  @Field({ nullable: true })
  updatedAt?: Date

  @Field({ nullable: true })
  date?: Date

  @Field(() => Chapter, { nullable: true })
  chapter?: Chapter

  @Field({ nullable: true })
  isVisitorDay?: boolean

  @Field(() => [MeetingPresence], { nullable: true })
  presence?: MeetingPresence[]

  @Field(() => [Substitute], { nullable: true })
  substitutes?: Substitute[]
}
