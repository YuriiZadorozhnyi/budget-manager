import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class TransactionsService {
  apiUrl = 'http://localhost:3000/api/';

constructor(private http: HttpClient) { }

  getTransactions(data = {}) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    return this.http.post(`${this.apiUrl}transaction`, data, { headers });
  }

  removeExpense(id) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    return this.http.delete(`${this.apiUrl}transaction/${id}`, { headers });
  }

}
