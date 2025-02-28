import { CreatePosttagInput } from './create-posttag.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePosttagInput extends PartialType(CreatePosttagInput) {
  @Field(() => Int)
  id: number;
}
