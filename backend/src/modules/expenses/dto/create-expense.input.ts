import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateExpenseInput {
  @Field((type) => Int)
  value: number;

  @Field()
  message: string;

  @Field({ nullable: true })
  receiverId?: number;

  @Field({ nullable: true })
  authorId?: number;
}
