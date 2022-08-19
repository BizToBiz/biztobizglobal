import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminCreateChapterMemberInput {
  @Field()
  name: string
}
