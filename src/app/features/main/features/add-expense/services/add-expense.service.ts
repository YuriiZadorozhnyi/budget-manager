import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AddExpenseService {
  apiUrl = 'http://localhost:3000/api/';

constructor(private http: HttpClient) { }

  addExpense(data) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    return this.http.post(`${this.apiUrl}add-expense`, data, { headers });
  }

}
