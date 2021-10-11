import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'modules/users/models/user';

@ObjectType()
export class Expense {
  @Field((type) => Int)
  id: number;

  @Field()
  message: string;

  @Field((type) => Int)
  value: number;

  @Field((type) => Int, { nullable: true })
  receiverId?: number;

  @Field({ nullable: true })
  author?: User;

  @Field((type) => Int, { nullable: true })
  authorId?: number;
}
