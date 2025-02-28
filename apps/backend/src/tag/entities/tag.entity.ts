import { ObjectType, Field, ID } from '@nestjs/graphql';
import { PostTag } from 'src/posttags/entities/posttag.entity';

@ObjectType()
export class Tag {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => [PostTag])
  posts: PostTag[];
}
