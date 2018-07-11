import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs/observable';

import { environment } from '@environments/environment';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class GlobalInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clonedReq = req.clone({
      url: `${environment.apiUrl}/${req.url}`,
      setHeaders: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    return next.handle(clonedReq);
  }
}
