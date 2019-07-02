import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  //Registro de rutas de los modulos
  {
    path:'paquetes',
    loadChildren:() => import('./paquete/paquete.module').then(mod => mod.PaqueteModule)
 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
