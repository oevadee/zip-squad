import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'modules/users/models/user';

@ObjectType()
export class RegisterPayload {
  @Field()
  status: string;

  @Field()
  access_token: string | null;

  @Field()
  user: User | null;
}
