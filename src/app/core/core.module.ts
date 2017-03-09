import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginModule} from "../login/login.module";
import {HomeModule} from "../home/home.module";
import {InscricaoModule} from "../inscricao/inscricao.module";

@NgModule({
    imports: [
        CommonModule,
        LoginModule,
        HomeModule,
        InscricaoModule
    ],
    declarations: []
})
export class CoreModule { }
