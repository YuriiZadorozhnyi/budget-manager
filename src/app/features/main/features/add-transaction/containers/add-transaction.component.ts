import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { TransactionModel } from '@core/models/transaction.model';
import { TransactionCategoryModel } from '@share/models/transaction-category.model';

import { TransactionsService } from '@core/services/transactions.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.scss']
})
export class AddTransactionComponent implements OnInit {
  newTransactionForm: FormGroup;
  tasksList: TransactionModel[] = [];
  currentTransactionCategories: TransactionCategoryModel[];
  expenseCategories: TransactionCategoryModel[];
  incomeCategories: TransactionCategoryModel[];

  constructor(private fb: FormBuilder,
              private transactionsService: TransactionsService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
    this.getCategories();
    this.newTransactionForm.get('type').valueChanges.subscribe(type => {
      this.changeTransactionCategory(type);
    });
  }

  initForm() {
    this.newTransactionForm = this.fb.group({
      title: ['',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(25)
        ]
      ],
      description: ['',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50)
        ]
      ],
      type: ['', [Validators.required]],
      category: ['', [Validators.required]],
      price: ['',
        [
          Validators.required,
          Validators.min(1),
          Validators.max(100000)
        ]
      ],
    });
  }

  getCategories() {
    this.transactionsService.getTransactionCategory().subscribe((res: TransactionCategoryModel[]) => {
      this.incomeCategories = res.filter(el => el.type === 'income');
      this.expenseCategories = res.filter(el => el.type === 'expense');
    });
  }

  changeTransactionCategory(event) {
    this.currentTransactionCategories = event.value === 'income' ? this.incomeCategories : this.expenseCategories;
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
