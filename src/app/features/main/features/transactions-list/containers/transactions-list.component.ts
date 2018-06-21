import { Component, OnInit } from '@angular/core';

import { TransactionModel } from '@core/models/transaction.model';
import { TransactionsService } from '../services/transactions.service';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss']
})
export class TransactionsListComponent implements OnInit {
  tasksList: TransactionModel[] = [];

  constructor(private transactionsService: TransactionsService) { }

  ngOnInit() {
    this.getExpensesList();
  }

  getExpensesList() {
    this.transactionsService.getTransactions().subscribe((res: TransactionModel[]) => {
      this.tasksList = res;
    });
  }

  removeTask(id) {
    this.transactionsService.removeExpense(id).subscribe(() => {
      this.getExpensesList();
    });
  }

}
