import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { TaskModel } from '@core/models/task.model';

import { AddExpenseService } from './../services/add-expense.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss']
})
export class AddExpenseComponent implements OnInit {
  newExpenseForm: FormGroup;
  tasksList: TaskModel[] = [];
  transactionsType = ['expense', 'income'];
  expenseCategories = ['Food', 'Utilities', 'Jewelry', 'Transport', 'Communication'];
  incomeCategories = ['Salary', 'Gift', 'Social Help', 'Budget Correction', 'Other Income'];

  constructor(private fb: FormBuilder,
              private addExpenseService: AddExpenseService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.newExpenseForm = this.fb.group({
      title: '',
      description: '',
      category: '',
      price: ''
    });
  }

  addExpense() {
    const userName = localStorage.getItem('user');
    const data = {
      ...this.newExpenseForm.value,
      id: (new Date()).getTime(),
      author: userName
    };
    this.addExpenseService.addExpense(data).subscribe((res: any) => {
      console.log(res);
      if (res || res.saved) {
        this.router.navigate(['/main/tasks-list']);
      }
    });
  }

}
