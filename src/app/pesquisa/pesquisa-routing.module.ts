import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PesquisaComponent} from "./pesquisa.component";
import {AuthGuard} from "../shared/auth.guard";

const routes: Routes = [
    {path: 'pesquisa', component: PesquisaComponent, canActivate: [AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class PesquisaRoutingModule {
}
