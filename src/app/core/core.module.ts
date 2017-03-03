import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginModule} from "../login/login.module";
import {HomeModule} from "../home/home.module";

@NgModule({
    imports: [
        CommonModule,
        LoginModule,
        HomeModule
    ],
    declarations: []
})
export class CoreModule { }
