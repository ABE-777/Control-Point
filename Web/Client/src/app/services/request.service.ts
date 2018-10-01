import { Injectable } from '@angular/core';
import {Subscription, Observable} from "rxjs"
import { Router } from '@angular/router';

@Injectable()
export class RequestService {

  constructor(private router: Router) { }

  intercept(observable: Observable<any>) {
    return observable.catch(err => {
      if (err.status === 500) {
        this.router.navigate(['/server-error']);
      } else if (err.status === 403) {
        this.router.navigate(['/access-denied']);
      } else {
        return Observable.throw(err);
      }
    });
  }
}

