import { Field, ObjectType } from '@nestjs/graphql'
import { MeetingAttendance } from './meeting-attendance.enum'
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

  @Field(() => User, { nullable: true })
  member?: User
}
