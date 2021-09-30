import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query((returns) => User)
  getOneUser(@Args('id', { type: () => String }) id: string): Promise<User> {
    return this.usersService.getOneUser(id);
  }

  @Query((returns) => [User])
  getAllUsers(): Promise<User[]> {
    return this.usersService.getAllUsers();
  }

  // MUTATION

  @Mutation((returns) => User)
  createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<User> {
    return this.usersService.createUser(createUserInput);
  }
}
