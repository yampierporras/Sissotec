import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { LoginService } from './login/login.service';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private loginService:LoginService, private router:Router){}

  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        // if (this.loginService.estaAutenticado(next._routerState.url)) {
        //
        // }
        // console.log(next._routerState.url);
        // console.log(this.router.url);
        // return true;
        // console.log(next.routeConfig.path);
        // console.log(state.url);
        if (this.loginService.estaAutenticado(state.url)) {
            return true;
        }
        console.log('Sera falso');
        this.router.navigate(['/login'])
        return false;
    }
}
