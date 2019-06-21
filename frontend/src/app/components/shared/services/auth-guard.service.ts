import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {
  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      return true;
  }
}
