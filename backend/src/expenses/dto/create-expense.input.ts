import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateExpenseInput {
  @Field()
  value: number;

  @Field()
  description?: string;

  @Field()
  userId: string;
}
