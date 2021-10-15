import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ExpensesService } from './expenses.service';
import { CreateExpenseInput } from './dto/create-expense.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'modules/auth/guards/gql-auth.guard';
import { CtxUser } from 'modules/auth/decorators/ctx-user.decorator';
import { User } from '.prisma/client';
import { Expense } from './models/expense';

@Resolver(() => Expense)
export class ExpensesResolver {
  constructor(private readonly expensesService: ExpensesService) {}

  @Query(() => Expense, { name: 'expense' })
  getOneExpense(
    @CtxUser() user: User,
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.expensesService.getOneExpense(user.id, id);
  }

  @Query(() => [Expense], { name: 'expenses' })
  findAllExpenses(@CtxUser() user: User) {
    return this.expensesService.findAllExpenses(user.id);
  }

  // MUTATIONS

  @Mutation(() => Expense)
  createExpense(
    @CtxUser() user: User,
    @Args('createExpenseInput')
    createExpenseInput: CreateExpenseInput,
  ) {
    return this.expensesService.createExpense(user.id, createExpenseInput);
  }

  @Mutation(() => Expense)
  deleteExpense(
    @CtxUser() user: User,
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.expensesService.deleteExpense(user.id, id);
  }
}
