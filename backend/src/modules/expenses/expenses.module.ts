import { Module } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { ExpensesResolver } from './expenses.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [ExpensesResolver, ExpensesService, PrismaService],
})
export class ExpensesModule {}
