import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserCreateChapterMemberInput {
  @Field()
  name: string
}
