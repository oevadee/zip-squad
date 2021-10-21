import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateUserUsernameInput {
  @Field({ nullable: true })
  username?: string;

  @Field({ nullable: true })
  password?: string;
}
