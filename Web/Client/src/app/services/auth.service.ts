import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as auth0 from 'auth0-js';
import { AUTH_CONFIG } from '../../environments/environment';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { UserManagementService } from './user-management.service';
import { Observable } from '@aspnet/signalr-client/dist/src/Observable';
import { Roles } from '../models/roles.enum';

@Injectable()
export class AuthService {
  // Create Auth0 web auth instance
  auth0 = new auth0.WebAuth({
    clientID: AUTH_CONFIG.CLIENT_ID,
    domain: AUTH_CONFIG.CLIENT_DOMAIN,
    responseType: 'token id_token',
    redirectUri: AUTH_CONFIG.REDIRECT,
    audience: AUTH_CONFIG.AUDIENCE,
    scope: AUTH_CONFIG.SCOPE
  });
  userProfile: any;
  isPasswordCorrect: boolean;

  // Create a stream of logged in status to communicate throughout app
  loggedIn: boolean;
  loggedIn$ = new BehaviorSubject<boolean>(this.loggedIn);

  constructor(private router: Router, public http: HttpClient, private userService: UserManagementService) {
    // If authenticated, set local profile property and update login status subject
    // If token is expired, log out to clear any data from localStorage

    if (this.authenticated) {
      if (localStorage.getItem('profile') && localStorage.getItem('profile') != 'undefined')
        this.userProfile = JSON.parse(localStorage.getItem('profile'));
      this.setLoggedIn(true);
    } else {
      this.logout();
    }
  }

  setLoggedIn(value: boolean) {
    // Update login status subject
    this.loggedIn$.next(value);
    this.loggedIn = value;
  }

  //login() {
  //  // Auth0 authorize request
  //  this.auth0.authorize();
  //}
  public login(username: string, password: string, remember: boolean, callback?) {

    const self = this;

    return this.auth0.client.login({
      realm: 'Username-Password-Authentication',
      username: username,
      password: password,
      scope: 'openid user_metadata profile read:messages',
      audience: AUTH_CONFIG.AUDIENCE
    }, function (err, authResult) {
      if (!err) {
        self._setSession(authResult, remember);
        self._getProfile(authResult, () => {
          self._setCurrentUserRole(() => {
            self.router.navigate([self.getEntryRoute()]);

            callback && callback(true);
          });
        });
        self.isPasswordCorrect = true;
      } else {       
        self.isPasswordCorrect = false;
        callback && callback(false);
      }
    })
  }

  getEntryRoute(): string {
    switch (localStorage.getItem('role')) {
      case Roles.superAdmin:
        return '/school-accounts';

      case Roles.scanner:
        return '/scanner';

      case Roles.classroomTeacher:
      case Roles.dismissalTeacher:
        return '/flights';

      case Roles.parent:
        return '/parents-dashboard';

      default:
        return '/archive';
    }
  }

  matchRoles(...rest: string[]): boolean {
    // return true if match one of role
    const currentRole: string = localStorage.getItem('role');
    return rest.some(role => currentRole === role)
  }

  handleAuth() {
    // When Auth0 hash parsed, get profile
    this.auth0.parseHash(window.location.hash, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this._getProfile(authResult);
      } else if (err) {
        console.error(`Error: ${err.error}`);
      }
      this.router.navigate(['/']);
    });
  }

  private _getProfile(authResult, callback?) {
    // Use access token to retrieve user's profile and set session
    this.auth0.client.userInfo(authResult.accessToken, (err, profile) => {
      this._setSession(authResult, profile);
      !callback || callback();
    });
  }

  private _setSession(authResult, profile) {
    const expTime = authResult.expiresIn * 1000 + Date.now();
    // Save session data and update login status subject
    localStorage.setItem('token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('profile', JSON.stringify(profile));
    localStorage.setItem('expires_at', JSON.stringify(expTime));
    this.userProfile = profile;
    this.setLoggedIn(true);
  }

  private _setCurrentUserRole(callback?): void {
    this.userService.getUserInfo().subscribe(res => {
      localStorage.setItem('role', res.role);
      localStorage.setItem('userId', res.userId.toString());
      callback && callback();
    })
  }

  logout(redirectToLogin?: boolean) {
    // Remove tokens and profile and update login status subject
    localStorage.removeItem('token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('role');
    localStorage.removeItem('selectedSchool');
    localStorage.removeItem('selectedSchoolName');
    localStorage.removeItem('userId');
    this.userProfile = undefined;
    this.setLoggedIn(false);
    if (redirectToLogin) this.router.navigate(['/login']);
  }

  get authenticated(): boolean {
    // Check if current date is greater than expiration
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return Date.now() < expiresAt;
  }

  get token(): string {
    return localStorage.getItem('token');
  }

  get auth0UserId(): string {
    return JSON.parse(localStorage.getItem('profile')).sub;
  }

  resetPassword(email: string) {
    return this.http.get(`/api/UserManagement/ResetPassword/${email}`);
  }

  setPassword(email: string, password: string) {
    return this.http.post(`/api/UserManagement/SetUserPassword`, {email, password});
  }

}
