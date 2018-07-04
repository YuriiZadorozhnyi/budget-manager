import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { TransactionModel } from '@core/models/transaction.model';
import { TransactionsService } from '@core/services/transactions.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.scss']
})
export class AddTransactionComponent implements OnInit {
  newTransactionForm: FormGroup;
  tasksList: TransactionModel[] = [];
  transactionsType = ['expense', 'income'];
  expenseCategories = ['Food', 'Utilities', 'Jewelry', 'Transport', 'Communication'];
  incomeCategories = ['Salary', 'Gift', 'Social Help', 'Budget Correction', 'Other Income'];

  constructor(private fb: FormBuilder,
              private transactionsService: TransactionsService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.newTransactionForm = this.fb.group({
      title: '',
      description: '',
      category: '',
      price: ''
    });
  }

  addTransaction() {
    const userName = localStorage.getItem('user');
    const data = {
      ...this.newTransactionForm.value,
      id: (new Date()).getTime(),
      author: userName
    };
    this.transactionsService.addTransaction(data).subscribe((res: any) => {
      if (res || res.saved) {
        this.router.navigate(['/main/transactions-list']);
      }
    });
  }

}
