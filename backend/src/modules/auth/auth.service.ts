import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { AuthLoginInput } from './dto/auth-login.input';
import { AuthRegisterInput } from './dto/auth-register.input';
import { UserToken } from './models/user-token';
import { compare } from 'bcryptjs';
import { RegisterStatus } from './models/register-status';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (!user && (await compare(password, user.password))) {
      const { password, ...rest } = user;
      return rest;
    }

    return null;
  }

  async register(input: AuthRegisterInput): Promise<RegisterStatus> {
    // check if the user already exists
    const found = await this.usersService.getAuthUser(input.username);

    if (found)
      throw new BadRequestException(
        `Username ${input.username} is already taken.`,
      );

    const user = await this.usersService.createUser(input);

    if (user) return { status: 'success' };
    else return { status: 'fail' };
  }

  async login(input: AuthLoginInput): Promise<UserToken> {
    const user = await this.usersService.getAuthUser(input.username);

    if (!user) {
      throw new BadRequestException(
        `User with ${input.username} username already exists.`,
      );
    }

    const payload = { username: user.username, sub: user.id };

    return { access_token: this.jwtService.sign(payload) };
  }
}
