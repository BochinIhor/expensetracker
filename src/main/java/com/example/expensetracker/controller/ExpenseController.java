package com.example.expensetracker.controller;

import com.example.expensetracker.model.Expense;
import com.example.expensetracker.service.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/expenses")
public class ExpenseController {
    @Autowired
    private ExpenseService expenseService;

    @GetMapping
    public ResponseEntity<List<Expense>> get() {
        List<Expense> expenses = expenseService.getAllExpenses();
        return new ResponseEntity<List<Expense>>(expenses, HttpStatus.OK);
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Expense> save(@RequestBody Expense expense) {
        Expense newExpense = expenseService.save(expense);
        return new ResponseEntity<Expense>(newExpense, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Expense> get(@PathVariable("id") long id) {
        Expense expense = expenseService.findById(id);
        return new ResponseEntity<Expense>(expense, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable("id") long id) {
        expenseService.deleteExpense(id);
        return new ResponseEntity<String>("Expense was deleted.", HttpStatus.OK);
    }
}
