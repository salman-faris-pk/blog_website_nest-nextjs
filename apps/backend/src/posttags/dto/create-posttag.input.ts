import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePosttagInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
