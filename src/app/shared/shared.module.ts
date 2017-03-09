import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AuthGuard} from "./auth.guard";

import {AngularFireModule} from 'angularfire2';
import {firebaseConfig} from "./firebase.config";
import {FirebaseService} from "./firebase.service";
import {TopoComponent} from './topo/topo.component';
import {AlertModule, PopoverModule} from "ng2-bootstrap";
import { LoaderComponent } from './loader/loader.component';
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        RouterModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AlertModule.forRoot(),
        PopoverModule.forRoot()
    ],
    declarations: [
        TopoComponent,
        LoaderComponent
    ],
    providers: [
        AuthGuard,
        FirebaseService
    ],
    exports: [
        FormsModule,
        HttpModule,
        TopoComponent,
        AlertModule,
        PopoverModule,
        LoaderComponent
    ]
})
export class SharedModule {
}
