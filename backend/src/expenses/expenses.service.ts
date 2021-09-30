import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExpenseInput } from './dto/create-expense.input';
import { Expense } from './entities/expense.entity';

@Injectable()
export class ExpensesService {
  constructor(
    @InjectRepository(Expense) private expensesRepository: Repository<Expense>,
  ) {}

  getOneExpense(id: string) {
    return this.expensesRepository.findOneOrFail(id);
  }

  getAllExpenses() {
    return this.expensesRepository.find();
  }

  createExpense(createExpenseInput: CreateExpenseInput) {
    return this.expensesRepository.save(createExpenseInput);
  }
}
