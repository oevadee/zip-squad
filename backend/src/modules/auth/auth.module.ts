import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtSecret } from './contants';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PrismaService } from 'src/prisma.service';
import { AuthResolver } from './auth.resolver';
import { GqlAuthGuard } from './guards/gql-auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

const tokenExpireTime = 60 * 60 * 24 * 7 * 2;
const defaultPassportStrategy = 'jwt';

@Module({
  imports: [
    UsersModule,
    PassportModule.register({ defaultStrategy: defaultPassportStrategy }),
    JwtModule.register({
      secret: jwtSecret,
      signOptions: { expiresIn: tokenExpireTime },
    }),
  ],
  providers: [
    AuthResolver,
    AuthService,
    JwtStrategy,
    PrismaService,
    GqlAuthGuard,
  ],
  exports: [AuthService],
})
export class AuthModule {}
