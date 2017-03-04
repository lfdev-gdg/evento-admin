import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AuthGuard} from "./auth.guard";

import { AngularFireModule } from 'angularfire2';
import {firebaseConfig} from "./firebase.config";
import {FirebaseService} from "./firebase.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        AngularFireModule.initializeApp(firebaseConfig)
    ],
    declarations: [],
    providers: [
        AuthGuard,
        FirebaseService
    ]
})
export class SharedModule { }
