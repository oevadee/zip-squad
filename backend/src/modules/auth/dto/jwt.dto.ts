import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class JwtDto {
  @Field()
  sub: number;

  @Field()
  username: string;
}
