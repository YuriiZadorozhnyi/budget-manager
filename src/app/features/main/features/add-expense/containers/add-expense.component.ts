import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  expenseCategories = ['Food', 'Utilities', 'Jewelry', 'Transport', 'Communication'];

  constructor(private fb: FormBuilder,
              private addExpenseService: AddExpenseService) { }

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
    this.addExpenseService.addExpense(data).subscribe(res => {
      // console.log(res);
    });
  }

}
