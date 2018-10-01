import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, CanActivate } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authService.authenticated) {
      this.router.navigate(['/login']);
      console.log('Routing not authorized');
      return false;
    } else if ( route.data.expectedRoles ) {
      if (route.data.expectedRoles.indexOf(localStorage.getItem('role')) === -1) {
        this.router.navigate(['/access-denied']);
        console.log('Routing not permitted');
        return false;
      }
    }
    return true;
  }
}
