import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from 'modules/users/models/user';
import { AuthService } from './auth.service';
import { AuthLoginInput } from './dto/auth-login.dto';
import { AuthRegisterInput } from './dto/auth-register.dto';
import { RegisterPayload } from './models/register';
import { LoginPayload } from './models/login';
import { AuthVerifyToken } from './dto/auth-verify-token.dto';
import { VerifyTokenPayload } from './models/verify-token';

@Resolver()
export class AuthResolver {
  constructor(private readonly service: AuthService) {}

  @Mutation(() => LoginPayload)
  login(
    @Args({ name: 'input', type: () => AuthLoginInput }) input: AuthLoginInput,
  ) {
    return this.service.login(input);
  }

  @Mutation(() => RegisterPayload)
  register(
    @Args({ name: 'input', type: () => AuthRegisterInput })
    input: AuthRegisterInput,
  ) {
    return this.service.register(input);
  }

  @Mutation(() => VerifyTokenPayload)
  verifyToken(
    @Args({ name: 'input', type: () => AuthVerifyToken })
    input: AuthVerifyToken,
  ) {
    return this.service.verifyToken(input);
  }
}
