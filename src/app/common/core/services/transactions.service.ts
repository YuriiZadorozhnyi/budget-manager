import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class TransactionsService {

constructor(private http: HttpClient) { }

  getTransactions(data = {}) {
    return this.http.post(`transaction`, data);
  }

  addTransaction(data) {
    return this.http.put('transaction', data);
  }

  removeTransaction(id) {
    return this.http.delete(`transaction/${id}`);
  }

  getTransactionCategory(data = {}) {
    return this.http.post('transaction-category', data);
  }

  addTransactionCategory(data) {
    return this.http.put('transaction-category', data);
  }

  removeTransactionCategory(id) {
    return this.http.delete(`transaction-category/${id}`);
  }

}
