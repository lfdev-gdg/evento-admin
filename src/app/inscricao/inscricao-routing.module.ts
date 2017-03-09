import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InscricaoComponent} from "./inscricao.component";
import {AuthGuard} from "../shared/auth.guard";

const routes: Routes = [
    {path: 'inscricao', component: InscricaoComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class InscricaoRoutingModule { }
