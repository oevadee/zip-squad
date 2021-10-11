import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '.prisma/client';
import { jwtSecret } from './contants';
import { PrismaService } from 'src/prisma.service';
import { AuthLoginInput } from './dto/auth-login.input';
import { AuthRegisterInput } from './dto/auth-register.input';
import { UserToken } from './models/user-token';
import { AuthHelper } from './auth.helper';
import { JwtDto } from './dto/jwt.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  public async login(input: AuthLoginInput): Promise<UserToken> {
    const found = await this.usersService.getAuthUser(input.username);

    if (!found) {
      throw new BadRequestException(
        `User with ${input.username} username already exists.`,
      );
    }

    const passwordValid = await AuthHelper.validate(
      input.password,
      found.password,
    );

    if (!passwordValid) throw new Error('Invalid password');

    return { user: found, token: this.signToken(found.id) };
  }

  public async register(input: AuthRegisterInput): Promise<UserToken> {
    // check if the user already exists
    const found = await this.usersService.getAuthUser(input.username);

    if (found) {
      throw new BadRequestException(
        `Username ${input.username} is already taken.`,
      );
    }

    const password = await AuthHelper.hash(input.password);

    const created = await this.usersService.createUser({
      ...input,
      password,
    });

    return { user: created, token: this.signToken(created.id) };
  }

  private signToken(id: number) {
    const payload: JwtDto = { userId: id };

    return this.jwtService.sign(payload);
  }

  public async validateUser(userId: number) {
    return this.usersService.getOneUser(userId);
  }
}
