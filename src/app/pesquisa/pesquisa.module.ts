import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { ChartsModule } from 'ng2-charts';

import {PesquisaRoutingModule} from './pesquisa-routing.module';
import {PesquisaComponent} from './pesquisa.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ChartsModule,
        PesquisaRoutingModule
    ],
    declarations: [PesquisaComponent]
})
export class PesquisaModule {
}
