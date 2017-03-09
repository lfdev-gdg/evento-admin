import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InscricaoRoutingModule} from './inscricao-routing.module';
import {InscricaoComponent} from './inscricao.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        InscricaoRoutingModule
    ],
    declarations: [InscricaoComponent]
})
export class InscricaoModule {
}
