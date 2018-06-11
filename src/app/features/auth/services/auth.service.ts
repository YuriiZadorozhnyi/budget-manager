import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class AuthService {
  apiUrl = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) { }

  signIn(data) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    this.updateLocalStorage(data.name);
    return this.http.post(`${this.apiUrl}sign-in`, data, { headers, observe: 'response' });
  }

  signUp(data) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    this.updateLocalStorage(data.name);
    return this.http.post(`${this.apiUrl}sign-up`, data, { headers });
  }

  updateLocalStorage(userName) {
    localStorage.setItem('user', userName);
  }

}
