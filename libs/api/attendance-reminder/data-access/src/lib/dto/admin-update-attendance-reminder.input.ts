import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminUpdateAttendanceReminderInput {
  @Field({ nullable: true })
  chapterId: string

  @Field({ nullable: true })
  sentById?: string

  @Field({ nullable: true })
  sentToId?: string
}
