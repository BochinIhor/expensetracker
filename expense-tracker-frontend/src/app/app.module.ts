import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListExpensesComponent } from './components/list-expenses/list-expenses.component';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {RouterModule, Routes} from "@angular/router";
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

const routers: Routes = [
  {path: 'expenses', component: ListExpensesComponent},
  {path: 'add_expense', component: AddExpenseComponent},
  {path: 'editexpense/:id', component: AddExpenseComponent},
  {path: '', redirectTo: '/expenses', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ListExpensesComponent,
    AddExpenseComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routers),
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
