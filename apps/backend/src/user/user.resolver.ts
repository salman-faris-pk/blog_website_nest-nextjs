import { Resolver, Query, Mutation, Args} from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(()=> User)  //here entity uses for responsedata structure
  async createUser(@Args("createUserInput") createUserInput: CreateUserInput){
     
    return await this.userService.create(createUserInput);
  }

 
}
