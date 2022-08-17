import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserUpdateChapterMemberInput {
  @Field({ nullable: true })
  name?: string
}
