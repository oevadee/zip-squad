import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { ExpensesService } from 'src/expenses/expenses.service';

@Module({
  imports: [TypeOrmModule.forFeature([User]), ExpensesService],
  providers: [UsersService, UsersResolver],
})
export class UsersModule {}
