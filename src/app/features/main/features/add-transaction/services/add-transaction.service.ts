import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class AddTransactionService {

constructor(private http: HttpClient) { }

  addTransaction(data) {
    return this.http.put('transaction', data);
  }

}
