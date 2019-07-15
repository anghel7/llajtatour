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

  lugares: Paquete[];//lugares en el typescrip

  lugaresBusqueda: Paquete[];//mostrar datos de busqueda

  elementoBusqueda: string;

  imagen_url: string;
  //Primer ciclo
  constructor(private paqueteservice: PaqueteService) {
    this.titulo = "Nuestros destinos";

    this.elementoBusqueda = "";

    this.lugares = [];
    this.lugaresBusqueda = [];
    this.imagen_url = "";
  }
  //Segundo Ciclo
  ngOnInit() {
    this.paqueteservice.listarPaquetes()
      .subscribe(
        (respuesta) => {
          this.lugares = respuesta;
          this.lugaresBusqueda = respuesta;
        },
        (error) => {
          console.log('Error en el servidor: ', error);
        }
      );
  }

  busccarElementos(): void {
    this.lugaresBusqueda = this.lugares.filter(
      (paquetelugar) => {
        return paquetelugar.destino.includes(this.elementoBusqueda);
      }
    );    
  }

  myMetodo(event): void {
    console.log(event);
    this.imagen_url = event;
  }

}
