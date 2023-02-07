import { Field, InputType } from '@nestjs/graphql'
import { IsNotEmpty } from 'class-validator'

@InputType()
export class SpyOnUserInput {
  @Field()
  @IsNotEmpty()
  userId: string
}
