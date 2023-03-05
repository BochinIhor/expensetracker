import { Component } from '@angular/core';
import {ExpenseService} from "../../services/expense.service";
import {Expense} from "../../models/expense";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html',
  styleUrls: ['./list-expenses.component.scss']
})
export class ListExpensesComponent {
  expense = new Expense();
  expenses: Expense[] = [];
  constructor(private expenseService: ExpenseService,
              private _router: Router) {}

  filters = {
    keyword: '',
    sortBy: 'Name'
}

  ngOnInit(): void {
    this.getExpenses();
  }

  getExpenses(): void {
    this.expenseService.getExpenses().subscribe(expensesData => {
      this.expenses = this.filterExpenses(expensesData);
      });
  }

  editExpense(id: number): void {
    this._router.navigateByUrl('/editexpense/' + id);
  }

  deleteExpense(id: number) {
    this.expenseService.deleteExpense(id).subscribe(
      data => {
        console.log("Expense was deleted: " + data);
      });
    this.expenses = this.expenses.filter((expense: Expense) => expense.id != id);
  }

  filterExpenses(expenses: Expense[]) {
    return expenses.filter(e =>{
      return e.expense.toLowerCase().includes(this.filters.keyword.toLowerCase());
      // @ts-ignore
    }).sort((a, b) => {
      if(this.filters.sortBy === 'Name') {
        return a.expense.toLowerCase() < b.expense.toLowerCase() ? -1:1;
      }else if(this.filters.sortBy === 'Amount') {
        return a.amount < b.amount ? -1: 1;
      }
    })
  }
}
