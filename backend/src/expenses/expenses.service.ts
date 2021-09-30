import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExpenseInput } from './dto/create-expense.input';
import { UpdateExpenseInput } from './dto/update-expense.input';
import { Expense } from './entities/expense.entity';

@Injectable()
export class ExpensesService {
  constructor(
    @InjectRepository(Expense) private expensesRepository: Repository<Expense>,
  ) {}

  create(createExpenseInput: CreateExpenseInput) {
    return this.expensesRepository.save(createExpenseInput);
  }

  findAll() {
    return this.expensesRepository.find();
  }

  findOne(id: number) {
    return this.expensesRepository.findOneOrFail(id);
  }
}
