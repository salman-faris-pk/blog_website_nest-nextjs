import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Post } from 'src/post/entities/post.entity';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class Like {
  @Field(() => ID)
  id: string;

  @Field(() => User)
  user: User;

  @Field(() => Post)
  post: Post;

  @Field()
  createdAt: Date;
}
