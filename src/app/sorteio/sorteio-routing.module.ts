import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SorteioComponent} from "./sorteio.component";
import {AuthGuard} from "../shared/auth.guard";

const routes: Routes = [
    {path: 'sorteio', component: SorteioComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SorteioRoutingModule { }
