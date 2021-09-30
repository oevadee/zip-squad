import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Expense {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: string;

  @Column()
  @Field()
  value: number;

  @Column()
  @Field({ nullable: true })
  description?: number;

  @ManyToOne(() => User, (user) => user.expense)
  @Field((type) => User)
  user: User;
}
