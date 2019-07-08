import { Component, OnInit } from '@angular/core';
import { Paquete } from "../../shared/models/paquete";
import { PaqueteService } from 'src/app/shared/services/paquete.service';

@Component({
  selector: 'app-paquete-lista',
  templateUrl: './paquete-lista.component.html',
  styleUrls: ['./paquete-lista.component.css']
})
export class PaqueteListaComponent implements OnInit {

  titulo: string;

  lugares: Paquete[];

  elementoBusqueda: string;
  //Primer ciclo
  constructor(private paqueteservice: PaqueteService) {
    this.titulo = "Nuestros destinos";

    this.elementoBusqueda = "Ingrese una palabra";

    this.lugares = [];
  }
  //Segundo Ciclo
  ngOnInit() {
    this.paqueteservice.listarPaquetes()
      .subscribe(
        (respuesta)=>{
          //console.log('Respuesta del servidor: ', respuesta);    
          this.lugares = respuesta; 
        },
        (error)=>{
          console.log('Error en el servidor: ', error);          
        }
      );
  }

  busccarElementos(): void {
    console.log(this.elementoBusqueda);
  }
}
