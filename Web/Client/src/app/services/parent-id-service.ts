import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ParentIdService {
  private parentIdSource = new BehaviorSubject<number>(0);
  parentId = this.parentIdSource.asObservable();
  isSourceForParentId: boolean = false;

  constructor() { }

  changeParentId(id: number) {
    this.parentIdSource.next(id);
    this.isSourceForParentId = true;
  }

}
