import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paquete-lista',
  templateUrl: './paquete-lista.component.html',
  styleUrls: ['./paquete-lista.component.css']
})
export class PaqueteListaComponent implements OnInit {

  titulo:string;

  lugares:string[];

  constructor() {
    this.titulo="Nuestros destinos";
    this.lugares = ["Cristo", "Pairumani", "Liruini"];    
  }

  ngOnInit() {
  }

}
