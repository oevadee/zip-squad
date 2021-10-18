import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RegisterStatus {
  @Field()
  status: string;
}
