import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AuthVerifyToken {
  @Field()
  token: string;
}
