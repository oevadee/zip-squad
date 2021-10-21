import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { AuthLoginInput } from './dto/auth-login.dto';
import { AuthRegisterInput } from './dto/auth-register.dto';
import { compare } from 'bcryptjs';
import { RegisterPayload } from './models/register';
import { User } from 'modules/users/models/user';
import { LoginPayload } from './models/login';
import { AuthVerifyToken } from './dto/auth-verify-token.dto';
import { VerifyTokenPayload } from './models/verify-token';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<User | null> {
    const user = await this.usersService.findOne(username);
    if (!user && (await compare(password, user.password))) {
      const { password, ...rest } = user;
      return rest;
    }

    return null;
  }

  async register(input: AuthRegisterInput): Promise<RegisterPayload> {
    // check if the user already exists
    const found = await this.usersService.getAuthUser(input.username);

    if (found)
      throw new BadRequestException(
        `Username ${input.username} is already taken.`,
      );

    const user = await this.usersService.createUser(input);
    const payload = { username: user.username, sub: user.id };
    const { password, ...rest } = user;

    if (user)
      return {
        status: 'success',
        access_token: this.jwtService.sign(payload),
        user: rest,
      };
    else
      return {
        status: 'fail',
        access_token: null,
        user: null,
      };
  }

  async login(input: AuthLoginInput): Promise<LoginPayload> {
    const user = await this.usersService.getAuthUser(input.username);

    if (!user) {
      throw new BadRequestException(
        `User with ${input.username} username already exists.`,
      );
    }

    const payload = { username: user.username, sub: user.id };
    const { password, ...rest } = user;

    return {
      status: 'success',
      access_token: this.jwtService.sign(payload),
      user: rest,
    };
  }

  async verifyToken({
    access_token,
  }: AuthVerifyToken): Promise<VerifyTokenPayload> {
    const { username, sub } = this.jwtService.verify(access_token);

    const user = await this.usersService.getAuthUser(username);

    const { password, ...rest } = user;

    return {
      status: 'success',
      user: rest,
    };
  }
}
