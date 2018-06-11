import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ExpensesService {
  apiUrl = 'http://localhost:3000/api/';

constructor(private http: HttpClient) { }

  getListOfExpenses() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    return this.http.post(`${this.apiUrl}expenses`, {}, { headers });
  }

  removeExpense(id) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    return this.http.delete(`${this.apiUrl}expenses/${id}`, { headers });
  }

}
