import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Expense} from "../models/expense";

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private serviceUrl: string = "http://localhost:8080/api/expenses";

  constructor(private _httpClient: HttpClient) { }

  getExpenses(): Observable<Expense[]> {
    return this._httpClient.get<Expense[]>(this.serviceUrl);
  }

  saveExpense(expense: Expense): Observable<Expense> {
    return this._httpClient.post<Expense>(this.serviceUrl, expense);
  }

  getExpense(id: number): Observable<Expense> {
    return this._httpClient.get<Expense>(`${this.serviceUrl}/${id}`);
  }

  deleteExpense(id: number): Observable<any> {
    return this._httpClient.delete<Expense>(`${this.serviceUrl}/${id}`);
  }
}
