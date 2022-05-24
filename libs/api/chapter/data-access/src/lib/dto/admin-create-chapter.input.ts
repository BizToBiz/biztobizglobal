import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminCreateChapterInput {
  @Field()
  name: string
}
