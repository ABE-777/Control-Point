import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'access-denied',
  templateUrl: 'access-denied.component.html'
})

export class AccessDeniedComponent {
  constructor(private location: Location) { }

  goBack() {
    this.location.back();
  }
}
