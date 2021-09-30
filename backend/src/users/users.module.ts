import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { ExpensesModule } from 'src/expenses/expenses.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), ExpensesModule],
  providers: [UsersService, UsersResolver],
})
export class UsersModule {}
