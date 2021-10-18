import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AuthRegisterInput {
  @Field({ nullable: true })
  email?: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  username: string;

  @Field()
  password: string;
}
