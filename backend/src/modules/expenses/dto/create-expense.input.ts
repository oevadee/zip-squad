import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateExpenseInput {
  @Field((type) => Int)
  value: number;

  @Field()
  message: string;

  @Field((type) => Int)
  receiverId: number;

  @Field((type) => Int)
  authorId: number;
}
