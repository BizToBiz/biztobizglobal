import { Field, ObjectType } from '@nestjs/graphql'
import { Meeting } from '@biztobiz/api/meeting/data-access'
import { MeetingAttendance } from '@biztobiz/api/enums/data-access'
import { User } from '@biztobiz/api/user/data-access'

@ObjectType()
export class MeetingPresence {
  @Field({ nullable: true })
  id?: string

  @Field({ nullable: true })
  createdAt?: Date

  @Field({ nullable: true })
  updatedAt?: Date

  @Field(() => MeetingAttendance, { nullable: true })
  attendance?: MeetingAttendance

  @Field(() => Meeting, { nullable: true })
  meeting?: Partial<Meeting>

  @Field(() => User, { nullable: true })
  member?: Partial<User>
}
