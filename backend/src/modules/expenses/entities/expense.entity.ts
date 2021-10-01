import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/modules/users/user.entity';

@ObjectType()
export class Expense {
  @Field((type) => Int)
  id: number;

  @Field()
  message: string;

  @Field((type) => Int)
  value: number;

  @Field((type) => Int)
  receiverId: number;

  @Field()
  author: User;

  @Field((type) => Int)
  authorId: number;
}
