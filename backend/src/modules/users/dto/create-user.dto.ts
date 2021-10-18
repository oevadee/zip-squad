import { Field, InputType } from '@nestjs/graphql';
import { IsAlpha } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsAlpha()
  @Field({ description: 'Email of the user.' })
  firstName!: string;

  @IsAlpha()
  @Field({ description: 'Full name of the user.' })
  lastName!: string;

  @Field({ description: 'Username of the user.' })
  username!: string;

  @Field({ description: 'User password.' })
  password!: string;
}
