import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { PaqueteRoutingModule } from './paquete-routing.module';
import { PaqueteListaComponent } from './paquete-lista/paquete-lista.component';
import { PaqueteItemComponent } from './paquete-item/paquete-item.component';
import { PaqueteCrearComponent } from './paquete-crear/paquete-crear.component';
import { PaqueteEditarComponent } from './paquete-editar/paquete-editar.component';
import { PaqueteEliminarComponent } from './paquete-eliminar/paquete-eliminar.component';
import { PaqueteDetalleComponent } from './paquete-detalle/paquete-detalle.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [PaqueteListaComponent, PaqueteItemComponent, PaqueteCrearComponent, PaqueteEditarComponent, PaqueteEliminarComponent, PaqueteDetalleComponent],
  imports: [
    CommonModule,
    PaqueteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule    
  ]
})
export class PaqueteModule { }
