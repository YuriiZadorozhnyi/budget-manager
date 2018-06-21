import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AddTransactionService {
  apiUrl = 'http://localhost:3000/api/';

constructor(private http: HttpClient) { }

  addTransaction(data) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    return this.http.put(`${this.apiUrl}transaction`, data, { headers });
  }

}
