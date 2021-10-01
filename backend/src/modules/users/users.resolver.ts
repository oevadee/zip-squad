import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserUsernameInput } from './dto/update-user.input';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query((returns) => User)
  getOneUser(
    @Args('userId', { type: () => Number }) userId: number,
  ): Promise<User> {
    return this.usersService.getOneUser(userId);
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

  @Mutation((returns) => User)
  updateUser(
    @Args('updateUserInput') updateUserInput: UpdateUserUsernameInput,
    @Args('userId') userId: number,
  ): Promise<User> {
    return this.usersService.updateUser({
      where: {
        id: userId,
      },
      data: updateUserInput,
    });
  }
}
