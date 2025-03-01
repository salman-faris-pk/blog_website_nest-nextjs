import { ObjectType, Field, ID,Int} from '@nestjs/graphql';
import { CommentEntity } from 'src/comment/entities/comment.entity';
import { Like } from 'src/like/entities/like.entity';
import { PostTag } from 'src/posttags/entities/posttag.entity';
import { User } from 'src/user/entities/user.entity';



@ObjectType()
export class Count {
  @Field(() => Int)
  likes: number;

  @Field(() => Int)
  comments: number;
}

@ObjectType()
export class Post {
   @Field(()=> ID)
   id: string;

   @Field({nullable: true})
   slug?: string;

   @Field()
   title: string;
   
   @Field()
   content: string;

   @Field({ nullable: true })
   thumbnail?: string;
 
   @Field(()=> Boolean)
   published: boolean;


   @Field(() => User) 
   author: User; 
 
   @Field()
   createdAt: Date;
 
   @Field()
   updatedAt: Date;
 
   @Field(() => [CommentEntity])
   comments: CommentEntity[];
 
   @Field(() => [PostTag])
   tags: PostTag[];
 
   @Field(() => [Like])
   likes: Like[];

   @Field(() => Count)
   _count: Count;
 

}
