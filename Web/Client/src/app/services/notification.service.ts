import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {

  private delay = 5000;
  private timer;
  public message = '';
  public isOpen = false;
  public warning: boolean = false;

  constructor() { }

  show(message: string, autoHide?: boolean, warning?: boolean) {
    this.isOpen = true;
    this.warning = warning;

    this.message = message;
    clearTimeout(this.timer);

    if (autoHide) {
      this.timer = window.setTimeout(() => { this.hide() }, this.delay);
    }
  }

  hide() {
    this.isOpen = false;
    clearTimeout(this.timer);
  }

}
