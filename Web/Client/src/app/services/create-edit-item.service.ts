import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class CreateEditItemService {
  private _routeSub: any;
  public itemId: number;
  public isEditMode: boolean = false;

  constructor() { }

  getItemId(route: ActivatedRoute, callback?) {
    this._routeSub = route.params.subscribe(params => {
      this.itemId = params['id'] ? +params['id'] : null;
      this.checkMode();
      callback && callback();
    });
  }

  checkMode() {
    this.isEditMode = this.itemId ? true : false;
  }
}
