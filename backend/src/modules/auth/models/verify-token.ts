import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'modules/users/models/user';

@ObjectType()
export class VerifyTokenPayload {
  @Field()
  status: string;

  @Field()
  user: User | null;
}
