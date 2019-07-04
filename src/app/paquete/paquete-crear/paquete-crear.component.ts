import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
//import { FormBuilder } from '@angular/forms';
//import {  FormGroup } from '@angular/forms';

@Component({
  selector: 'app-paquete-crear',
  templateUrl: './paquete-crear.component.html',
  styleUrls: ['./paquete-crear.component.css']
})
export class PaqueteCrearComponent implements OnInit {
  
  
  form:FormGroup;

  constructor(private fBuilder:FormBuilder) {
    this.form = this.fBuilder.group(
      {
        destino:[""],
        descripcion:[""],
        precio:[0],
        guia:[""],
        fechaPartida:[""]
      }
    );
  }

  ngOnInit() {
  }

  crearPaquete():void{
    console.log(this.form.value);     
  }


  /*Sim Di
  servA:ServicioA;
  constructor() { 
    this.servA = new ServicioA();
  }
  ngOnInit() {
    this.servA.method();
  }
  */

  /*Con DI
  constructor(private servA:ServicioA) { }

  ngOnInit() {
    this.servA.method();
  }
  */

}
