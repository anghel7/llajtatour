import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paquete-lista',
  templateUrl: './paquete-lista.component.html',
  styleUrls: ['./paquete-lista.component.css']
})
export class PaqueteListaComponent implements OnInit {

  departamento:String;

  lugares:string[];

  constructor() {
    this.lugares = ["Cristo", "Pairumani", "Liruini"];
    this.departamento="La Paz";
  }

  ngOnInit() {
  }

  verInfo():void{
    this.departamento = "Cochabamba";
  }

}
