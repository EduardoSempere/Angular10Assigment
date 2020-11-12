import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsDetailGuard implements CanActivate {

  constructor (private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const param = +route.url[1].path;
    if (isNaN(param) || param < 0) {
      alert(param);
      this.router.navigate(['/products']);
      return false;
    }
    return true;
  }
  
}
