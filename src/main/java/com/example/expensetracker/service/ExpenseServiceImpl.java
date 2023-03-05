package com.example.expensetracker.service;

import com.example.expensetracker.model.Expense;
import com.example.expensetracker.repository.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ExpenseServiceImpl implements ExpenseService{
    @Autowired
    ExpenseRepository expenseRepository;

    @Override
    public List<Expense> getAllExpenses() {
        return expenseRepository.findAll();
    }

    @Override
    @Transactional
    public Expense save(Expense expense) {
        expenseRepository.save(expense);
        return expense;
    }

    @Override
    public Expense findById(long id) {
        if(expenseRepository.findById(id).isPresent()) {
            return expenseRepository.findById(id).get();
        }
        return null;
    }

    @Override
    public void deleteExpense(Long id) {
        Expense expense = findById(id);
        expenseRepository.delete(expense);
    }
}
