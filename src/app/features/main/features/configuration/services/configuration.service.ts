import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigurationService {

constructor(private http: HttpClient) { }

  getTransactionCathegory(data = {}) {
    return this.http.post('transaction-category', data);
  }

  addTransactionCathegory(data) {
    return this.http.put('transaction-category', data);
  }

  removeTransactionCathegory(id) {
    return this.http.delete(`transaction-category/${id}`);
  }

  changeUserPassword(data) {
    return this.http.post('user', data);
  }

  removeUser(data) {
    return this.http.post('remove-user', data);
  }

}
