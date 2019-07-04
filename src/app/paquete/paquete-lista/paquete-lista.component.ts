import { Component, OnInit } from '@angular/core';
import { Paquete } from "../../shared/models/paquete";

@Component({
  selector: 'app-paquete-lista',
  templateUrl: './paquete-lista.component.html',
  styleUrls: ['./paquete-lista.component.css']
})
export class PaqueteListaComponent implements OnInit {

  titulo:string;

  lugares:Paquete[];

  elementoBusqueda:string;

  constructor() {
    this.titulo="Nuestros destinos"; 

    this.elementoBusqueda = "Ingrese una palabra";

    this.lugares = [
      {
        id:1,
        destino:'Liruini',
        descripcion:'Este es un paquete .......',
        precio:100,
        guia:'Nelso Morante',
        fechaPartida:'May 27, 2019'
      },
      {
        id:2,
        destino:'Pairumani',
        descripcion:'Este es un paquete .......',
        precio:100,
        guia:'Nelso Morante',
        fechaPartida:'May 27, 2019'
      },
      {
        id:3,
        destino:'Chinaota',
        descripcion:'Este es un paquete .......',
        precio:100,
        guia:'Nelso Morante',
        fechaPartida:'May 27, 2019'
      },
      {
        id:4,
        destino:'Villa tunari',
        descripcion:'Este es un paquete .......',
        precio:100,
        guia:'Nelso Morante',
        fechaPartida:'May 27, 2019'
      },
      {
        id:5,
        destino:'Toro Toro',
        descripcion:'Este es un paquete .......',
        precio:100,
        guia:'Nelso Morante',
        fechaPartida:'May 27, 2019'
      }
    ]; 
  }

  ngOnInit() {
  }

  busccarElementos():void{
    console.log(this.elementoBusqueda);    
  }

}
