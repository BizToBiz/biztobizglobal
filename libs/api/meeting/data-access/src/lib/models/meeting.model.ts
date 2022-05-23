import { Field, ObjectType } from '@nestjs/graphql'
import { MeetingPresence } from './meeting-presence.model'

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

  @Field({ nullable: true })
  isVisitorDay?: boolean

  @Field(() => [MeetingPresence], { nullable: true })
  presence?: MeetingPresence[]
}
