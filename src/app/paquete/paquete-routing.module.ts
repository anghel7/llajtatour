import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaqueteListaComponent } from './paquete-lista/paquete-lista.component'
import { PaqueteCrearComponent } from './paquete-crear/paquete-crear.component';
import { PaqueteDetalleComponent } from './paquete-detalle/paquete-detalle.component';
import { PaqueteEditarComponent } from './paquete-editar/paquete-editar.component';
import { PaqueteEliminarComponent } from './paquete-eliminar/paquete-eliminar.component';

const routes: Routes = [
  {
    path:'lista',
    component: PaqueteListaComponent
  },
  {
    path:'crear',
    component: PaqueteCrearComponent
  },
  {
    path:'detalle/:id',
    component: PaqueteDetalleComponent
  },
  {
    path:'editar/:id',
    component: PaqueteEditarComponent
  },
  
  {
    path:'eliminar/:id',
    component: PaqueteEliminarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaqueteRoutingModule { }
