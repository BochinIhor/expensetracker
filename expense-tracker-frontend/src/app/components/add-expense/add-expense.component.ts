import { Component } from '@angular/core';
import {Expense} from "../../models/expense";
import {ExpenseService} from "../../services/expense.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss']
})
export class AddExpenseComponent {
  expense: Expense = new Expense();

  constructor(private expenseService: ExpenseService,
              private _router: Router,
              private _activatedRoute: ActivatedRoute
  ) {  }

  ngOnInit(): void {
    const isIdPresent = this._activatedRoute.snapshot.paramMap.has('id');
    if(isIdPresent) {
      // @ts-ignore
      const curId = +this._activatedRoute.snapshot.paramMap.get('id');
      this.expenseService.getExpense(curId).subscribe(
        data => this.expense = data
      )
    }
  }

  saveExpense() {
    this.expenseService.saveExpense(this.expense).subscribe(data => {
      console.log('response' + data);
      this._router.navigateByUrl('/expenses');
      }
    )
  }

  deleteExpense(id: number) {
    this.expenseService.deleteExpense(id).subscribe(
      data => {
        console.log("Expense was deleted: " + data);
        this._router.navigateByUrl('/expenses');
      })
  }
}
