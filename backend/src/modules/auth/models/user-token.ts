import { Field, ObjectType } from '@nestjs/graphql';
import { User as PrismaUser } from '.prisma/client';
import { User } from 'modules/users/models/user';

@ObjectType()
export class UserToken {
  @Field()
  token: string;

  @Field(() => User)
  user: PrismaUser;
}
