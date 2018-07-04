import { Component, OnInit } from '@angular/core';

import { TransactionModel } from '@core/models/transaction.model';
import { TransactionsService } from '@core/services/transactions.service';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss']
})
export class TransactionsListComponent implements OnInit {
  tasksList: TransactionModel[] = [];

  constructor(private transactionsService: TransactionsService) { }

  ngOnInit() {
    this.getTransactionsList();
  }

  getTransactionsList() {
    this.transactionsService.getTransactions().subscribe((res: TransactionModel[]) => {
      this.tasksList = res;
    });
  }

  removeTask(id) {
    this.transactionsService.removeTransaction(id).subscribe(() => {
      this.getTransactionsList();
    });
  }

}
