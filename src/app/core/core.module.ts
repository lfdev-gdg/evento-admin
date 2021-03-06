import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginModule} from "../login/login.module";
import {HomeModule} from "../home/home.module";
import {InscricaoModule} from "../inscricao/inscricao.module";
import {PesquisaModule} from "../pesquisa/pesquisa.module";
import {SorteioModule} from "../sorteio/sorteio.module";

@NgModule({
    imports: [
        CommonModule,
        LoginModule,
        HomeModule,
        InscricaoModule,
        PesquisaModule,
        SorteioModule
    ],
    declarations: []
})
export class CoreModule { }
