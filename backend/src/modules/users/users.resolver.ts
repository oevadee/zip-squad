import { UseGuards } from '@nestjs/common';
import {
  Args,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from '@nestjs/graphql';
import { GqlAuthGuard } from 'modules/auth/guards/gql-auth.guard';
import { CreateUserInput } from './dto/create-user.dto';
import { UpdateUserUsernameInput } from './dto/update-user.dto';
import { User } from './models/user';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => User)
  getOneUser(
    @Args('username', { type: () => String }) username: string,
  ): Promise<User> {
    return this.usersService.findOne(username);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [User])
  getAllUsers(): Promise<User[]> {
    return this.usersService.getAllUsers();
  }

  // MUTATION

  @Mutation(() => User)
  async createUser(@Args('input') input: CreateUserInput) {
    return await this.usersService.createUser(input);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => User)
  updateUser(
    @Args('input') input: UpdateUserUsernameInput,
    @Args('id') id: number,
  ): Promise<User> {
    return this.usersService.updateUser({
      where: {
        id,
      },
      data: input,
    });
  }
}
