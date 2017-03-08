import {Component, OnInit} from '@angular/core';
import {FirebaseService} from "../shared/firebase.service";
import {AngularFire} from "angularfire2";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    user: any = { email: '', password: '' };

    constructor(private fire: FirebaseService, private router: Router) { }

    ngOnInit() { }

    logar() {
        this.fire.login(this.user).then(
            res => {
                let user = {
                    uid: res.auth.uid,
                    refreshToken: res.auth.refreshToken
                };
                sessionStorage.setItem('user', JSON.stringify(user));
                this.router.navigate(['/']);
            }
        ).catch(err => console.log(err));
    }

}
