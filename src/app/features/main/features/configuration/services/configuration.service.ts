import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ConfigurationService {
  apiUrl = 'http://localhost:3000/api/';

constructor(private http: HttpClient) { }

  getTransactionCathegory(data = {}) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    return this.http.post(`${this.apiUrl}transaction-category`, data, { headers });
  }

  addTransactionCathegory(data) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    return this.http.put(`${this.apiUrl}transaction-category`, data, { headers });
  }

  removeTransactionCathegory(id) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    return this.http.delete(`${this.apiUrl}transaction-category/${id}`, { headers });
  }

}
