import { Expense } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateExpenseInput } from './dto/create-expense.input';

@Injectable()
export class ExpensesService {
  constructor(private prisma: PrismaService) {}

  getOneExpense(id: number): Promise<Expense> {
    return this.prisma.expense.findUnique({
      where: {
        id,
      },
    });
  }

  findAllExpenses(): Promise<Expense[]> {
    return this.prisma.expense.findMany();
  }

  createExpense(data: CreateExpenseInput): Promise<Expense> {
    return this.prisma.expense.create({
      data,
    });
  }

  removeExpense(id: number): Promise<Expense> {
    return this.prisma.expense.delete({
      where: {
        id,
      },
    });
  }
}
