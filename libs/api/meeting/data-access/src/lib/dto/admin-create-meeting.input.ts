import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminCreateMeetingInput {
  @Field()
  date: Date

  @Field({ nullable: true })
  chapterId?: string

  @Field({ nullable: true })
  isVisitorDay?: boolean
}
