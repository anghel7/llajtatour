import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaqueteListaComponent } from './paquete-lista/paquete-lista.component'

const routes: Routes = [
  {
    path:'lista',
    component: PaqueteListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaqueteRoutingModule { }
