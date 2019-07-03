import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaqueteListaComponent } from './paquete-lista/paquete-lista.component'
import { PaqueteCrearComponent } from './paquete-crear/paquete-crear.component';

const routes: Routes = [
  {
    path:'lista',
    component: PaqueteListaComponent
  },
  {
    path:'crear',
    component: PaqueteCrearComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaqueteRoutingModule { }
