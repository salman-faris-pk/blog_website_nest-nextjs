import { Resolver, Query, Mutation, Args} from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from './entities/post.entity';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}


  @Query(() => [Post], { name: 'posts' })
  async findAll() {
    return this.postService.findAll();
  }

}
