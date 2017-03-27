import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SorteioRoutingModule} from './sorteio-routing.module';
import {SorteioComponent} from './sorteio.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        SorteioRoutingModule
    ],
    declarations: [SorteioComponent]
})
export class SorteioModule {
}
