package com.example.expensetracker.service;

import com.example.expensetracker.model.Expense;

import java.util.List;

public interface ExpenseService {

    List<Expense> getAllExpenses();

    Expense save(Expense expense);

    Expense findById(long id);

    void deleteExpense(Long id);
}
