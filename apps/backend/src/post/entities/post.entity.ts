import { ObjectType, Field, ID } from '@nestjs/graphql';

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
 
   @Field()
   published: boolean;

   @Field()
   authorId: string;

  //  @Field(() => User) 
  //  author: User; 
 
   @Field()
   createdAt: Date;
 
   @Field()
   updatedAt: Date;
 
  //  @Field(() => [Comment])
  //  comments: Comment[];
 
  //  @Field(() => [PostTag])
  //  tags: PostTag[];
 
  //  @Field(() => [Like])
  //  likes: Like[];
 


}
