import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        let user = sessionStorage.getItem('user');

        if (user === null) {
            this.router.navigate(['/login']);
            return false;
        }

        return true;
    }
}
