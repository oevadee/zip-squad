import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'modules/users/models/user';

@ObjectType()
export class LoginPayload {
  @Field()
  status: string;

  @Field()
  access_token: string;

  @Field()
  user: User;
}
