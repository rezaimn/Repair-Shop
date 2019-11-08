import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import { Router } from '@angular/router';
import {LocalStorage, SessionStorage} from 'ngx-webstorage';

@Injectable()
export class AuthGuard implements CanActivate {
    @LocalStorage('isLoggedIn') isLoggedIn;
    constructor(private router: Router) {}
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot) {
        if (this.isLoggedIn) {
            return true;
        }
        this.router.navigate(['/start-page']);
        return false;
    }
}
