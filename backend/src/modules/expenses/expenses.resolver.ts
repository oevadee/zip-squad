import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ExpensesService } from './expenses.service';
import { Expense } from './entities/expense.entity';
import { CreateExpenseInput } from './dto/create-expense.input';

@Resolver(() => Expense)
export class ExpensesResolver {
  constructor(private readonly expensesService: ExpensesService) {}

  @Query(() => Expense, { name: 'expense' })
  getOneExpense(@Args('id', { type: () => Int }) id: number) {
    return this.expensesService.getOneExpense(id);
  }

  @Query(() => [Expense], { name: 'expenses' })
  findAllExpenses() {
    return this.expensesService.findAllExpenses();
  }

  // MUTATIONS

  @Mutation(() => Expense)
  createExpense(
    @Args('createExpenseInput') createExpenseInput: CreateExpenseInput,
  ) {
    return this.expensesService.createExpense(createExpenseInput);
  }

  @Mutation(() => Expense)
  removeExpense(@Args('id', { type: () => Int }) id: number) {
    return this.expensesService.removeExpense(id);
  }
}
