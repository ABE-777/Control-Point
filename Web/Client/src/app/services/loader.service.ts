import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { Observable, SubscribableOrPromise } from 'rxjs/Observable';

@Injectable()
export class LoaderService {

  public status: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public statusMini: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  display(value: boolean) {
      this.status.next(value);
  }

  displayMini(value: boolean) {
    this.statusMini.next(value);
  }

  /**
   * Async loading all passed methods and then call callback function
   */
  loadAsync(methods: SubscribableOrPromise<any>[], callback: (res: any[]) => void) {
    this.display(true);

    forkJoin(methods).subscribe((res) => {
      callback(res);
      this.display(false);
    })
  }

}
