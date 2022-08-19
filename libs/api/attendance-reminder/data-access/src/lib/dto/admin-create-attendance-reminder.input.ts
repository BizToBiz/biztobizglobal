import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminCreateAttendanceReminderInput {
  @Field({ nullable: true })
  chapterId: string

  @Field({ nullable: true })
  sentById?: string

  @Field({ nullable: true })
  sentToId?: string
}
