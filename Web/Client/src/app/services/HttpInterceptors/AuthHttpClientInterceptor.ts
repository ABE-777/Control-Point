import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { AuthService } from "../auth.service";
import { Injectable, Injector } from "@angular/core";
import { Roles } from '../../models/roles.enum';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {

  //constructor(public auth: AuthService) { }
  constructor(public injector: Injector) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const auth = this.injector.get(AuthService);

    if (window.localStorage.getItem('role') === Roles.superAdmin && window.localStorage.getItem('selectedSchool')) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${auth.token}`,
          schoolId: window.localStorage.getItem('selectedSchool'),
          'Cache-Control': 'no-cache',
          Pragma: 'no-cache',
          'If-Modified-Since': 'Mon, 26 Jul 1997 05:00:00 GMT'
        }
      });
    } else {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${auth.token}`,
          'Cache-Control': 'no-cache',
          Pragma: 'no-cache',
          'If-Modified-Since': 'Mon, 26 Jul 1997 05:00:00 GMT'
        }
      });
    }
    return next.handle(request);
  }
}
