import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from 'modules/users/models/user';
import { AuthService } from './auth.service';
import { AuthLoginInput } from './dto/auth-login.input';
import { AuthRegisterInput } from './dto/auth-register.input';
import { AuthVerifyToken } from './dto/auth-verify-token.input';
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

  @Mutation(() => UserToken)
  register(
    @Args({ name: 'input', type: () => AuthRegisterInput })
    input: AuthRegisterInput,
  ) {
    return this.service.register(input);
  }

  @Mutation(() => User)
  verifyToken(
    @Args({ name: 'input', type: () => AuthVerifyToken })
    input: AuthVerifyToken,
  ) {
    return this.service.verifyToken(input);
  }
}
