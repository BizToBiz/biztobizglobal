import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminUpdateChapterMemberInput {
  @Field({ nullable: true })
  name?: string
}
