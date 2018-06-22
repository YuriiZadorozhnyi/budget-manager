import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class TransactionsService {

constructor(private http: HttpClient) { }

  getTransactions(data = {}) {
    return this.http.post(`transaction`, data);
  }

  removeExpense(id) {
    return this.http.delete(`transaction/${id}`);
  }

}
