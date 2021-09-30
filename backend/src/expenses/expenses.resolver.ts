import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ExpensesService } from './expenses.service';
import { Expense } from './entities/expense.entity';
import { CreateExpenseInput } from './dto/create-expense.input';

@Resolver((of) => Expense)
export class ExpensesResolver {
  constructor(private readonly expensesService: ExpensesService) {}

  @Query(() => Expense, { name: 'expense' })
  findOne(@Args('id') id: string) {
    return this.expensesService.getOneExpense(id);
  }

  @Query(() => [Expense], { name: 'expenses' })
  findAll() {
    return this.expensesService.getAllExpenses();
  }

  // MUTATIONS

  @Mutation(() => Expense)
  createExpense(
    @Args('createExpenseInput') createExpenseInput: CreateExpenseInput,
  ) {
    return this.expensesService.createExpense(createExpenseInput);
  }

  // @Mutation(() => Expense)
  // updateExpense(@Args('updateExpenseInput') updateExpenseInput: UpdateExpenseInput) {
  //   return this.expensesService.update(updateExpenseInput.id, updateExpenseInput);
  // }

  // @Mutation(() => Expense)
  // removeExpense(@Args('id', { type: () => Int }) id: number) {
  //   return this.expensesService.remove(id);
  // }
}
