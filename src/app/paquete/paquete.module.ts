import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaqueteRoutingModule } from './paquete-routing.module';
import { PaqueteListaComponent } from './paquete-lista/paquete-lista.component';
import { PaqueteItemComponent } from './paquete-item/paquete-item.component';
import { PaqueteCrearComponent } from './paquete-crear/paquete-crear.component';
import { PaqueteEditarComponent } from './paquete-editar/paquete-editar.component';
import { PaqueteEliminarComponent } from './paquete-eliminar/paquete-eliminar.component';

@NgModule({
  declarations: [PaqueteListaComponent, PaqueteItemComponent, PaqueteCrearComponent, PaqueteEditarComponent, PaqueteEliminarComponent],
  imports: [
    CommonModule,
    PaqueteRoutingModule
  ]
})
export class PaqueteModule { }
