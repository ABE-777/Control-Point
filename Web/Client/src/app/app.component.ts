import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router, NavigationEnd } from '@angular/router/';
import { ScanningHttpHubService } from './services/scanning-http-hub.service';
import { AuthService } from './services/auth.service';
import { Roles } from './models/roles.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  noMenu: boolean = false;
  noMenuRoutes: string[] = ['/school-accounts', '/edit-school']
  noMenuRoles: string[] = [Roles.parent, Roles.scanner, Roles.classroomTeacher, Roles.dismissalTeacher]

  constructor( private _router: Router, private hubService: ScanningHttpHubService, public authService: AuthService ) {
    _router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkIsLoginPage(event.urlAfterRedirects);
        this.checkToShowMenu(event.urlAfterRedirects)
      }
    });

    this.hubService.createHubConnection();
  }

  title = 'app';
  isLoginPage: Boolean = false;

  ngOnInit() {
  }

  checkIsLoginPage(url: string): void {
    this.isLoginPage = (url.includes('/login') || url === '/forgot-password' || url.includes('/create-account'));
  }

  checkToShowMenu(url: string): void {
    this.noMenu = false;
    // role checking
    if(this.authService.matchRoles(...this.noMenuRoles)) {
      this.noMenu = true;
    }
    // route checking
    if(this.noMenuRoutes.some(route => route === url)) {
      this.noMenu = true;
    }
  }
}

