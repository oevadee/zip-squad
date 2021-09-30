import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Expense {
  @PrimaryGeneratedColumn()
  @Field()
  id: string;

  @Column()
  @Field((type) => Int)
  value: number;

  @Column()
  @Field()
  description: string;

  @Column()
  @Field()
  creatorId: string;

  @Column()
  @Field()
  receiverId: string;

  @ManyToOne(() => User, (user) => user.expense)
  @Field((type) => User)
  user: User;
}
