import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateExpenseInput {
  @Field()
  value: number;

  @Field({ nullable: true })
  description?: number;
}
