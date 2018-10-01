import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html'
})
export class EntryComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) {
    this.redirectToEntryPage();
  }

  ngOnInit() {
  }

  redirectToEntryPage() {
    this.router.navigate([this.authService.getEntryRoute()]);
  }

}
