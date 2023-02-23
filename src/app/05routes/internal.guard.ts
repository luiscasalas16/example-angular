import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InternalGuard implements CanActivate, CanLoad {
  canActivate
  (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  )
  : Observable<boolean> | Promise<boolean> | boolean {

    if (sessionStorage.getItem('token') )
      return true;
    else
      return false;
  }

  canLoad
  (
    route: Route,
    segments: UrlSegment[]
  )
  : Observable<boolean> | Promise<boolean> | boolean {
    
    if (sessionStorage.getItem('token') )
      return true;
    else
      return false;
  }
}
