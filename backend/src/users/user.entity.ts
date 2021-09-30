import { Field, ObjectType } from '@nestjs/graphql';
import { Expense } from 'src/expenses/entities/expense.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field()
  id: string;

  @Column()
  @Field()
  firstName: string;

  @Column()
  @Field()
  lastName: string;

  @Column()
  @Field()
  username: string;

  @Column()
  @Field()
  password: string;

  @Column()
  @Field()
  userId: string;

  @OneToMany(() => Expense, (expense) => expense.creator)
  @Field((type) => [Expense], { nullable: true })
  expense?: Expense[];
}
