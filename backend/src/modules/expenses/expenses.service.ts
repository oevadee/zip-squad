import { Expense } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateExpenseInput } from './dto/create-expense.input';

@Injectable()
export class ExpensesService {
  constructor(private prisma: PrismaService) {}

  getOneExpense(userId: number, id: number): Promise<Expense> {
    return this.prisma.expense.findUnique({
      where: {
        id,
      },
    });
  }

  findAllExpenses(userId: number): Promise<Expense[]> {
    return this.prisma.expense.findMany();
  }

  createExpense(userId: number, data: CreateExpenseInput): Promise<Expense> {
    // Check if this user can create an expense
    return this.prisma.expense.create({
      data,
    });
  }

  deleteExpense(userId: number, id: number): Promise<Expense> {
    // Check if this user can delete an expense
    return this.prisma.expense.delete({
      where: {
        id,
      },
    });
  }
}
