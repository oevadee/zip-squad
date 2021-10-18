import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from 'modules/users/models/user';
import { AuthService } from './auth.service';
import { AuthLoginInput } from './dto/auth-login.dto';
import { AuthRegisterInput } from './dto/auth-register.dto';
import { RegisterStatus } from './models/register-status';
import { UserToken } from './models/user-token';

@Resolver()
export class AuthResolver {
  constructor(private readonly service: AuthService) {}

  @Mutation(() => UserToken)
  login(
    @Args({ name: 'input', type: () => AuthLoginInput }) input: AuthLoginInput,
  ) {
    return this.service.login(input);
  }

  @Mutation(() => RegisterStatus)
  register(
    @Args({ name: 'input', type: () => AuthRegisterInput })
    input: AuthRegisterInput,
  ) {
    return this.service.register(input);
  }
}
