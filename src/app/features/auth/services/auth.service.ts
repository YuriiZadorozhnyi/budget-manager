import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }

  signIn(data) {
    this.updateLocalStorage(data.name);
    return this.http.post(`sign-in`, data, { });
  }

  signUp(data) {
    this.updateLocalStorage(data.name);
    return this.http.post(`sign-up`, data, { });
  }

  updateLocalStorage(userName) {
    localStorage.setItem('user', userName);
  }

}
