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
import { UpdateUserUsernameInput } from './dto/update-user.input';
import { User } from './models/user';
import { UsersService } from './users.service';

@InputType()
class CreateUserInput {
  @Field({ description: 'Email of the user.' })
  firstName!: string;

  @Field({ description: 'Full name of the user.' })
  lastName!: string;

  @Field({ description: 'Username of the user.' })
  username!: string;

  @Field({ description: 'User password.' })
  password!: string;
}

@ObjectType()
class CreateUserPayload {
  @Field(() => User)
  user!: User;
}

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

  @Mutation(() => CreateUserPayload)
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
