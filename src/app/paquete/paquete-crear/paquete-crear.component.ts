import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaqueteService } from '../../shared/services/paquete.service';
//import { FormBuilder } from '@angular/forms';
//import {  FormGroup } from '@angular/forms';

@Component({
  selector: 'app-paquete-crear',
  templateUrl: './paquete-crear.component.html',
  styleUrls: ['./paquete-crear.component.css']
})
export class PaqueteCrearComponent implements OnInit {


  form: FormGroup;

  constructor(private fBuilder: FormBuilder, private paqueteservice: PaqueteService) {
    this.form = this.fBuilder.group(
      {
        destino: ["", [Validators.required]],//min 5 caracteres, max 10 caracteres
        descripcion: ["", [Validators.required]],//min 5 caracteres, max 100 caracteres
        precio: [0, [Validators.required]],//min 0, max 1000000
        guia: ["", [Validators.required]],//min 5 caracteres, max 50 caracteres
        fechaPartida: ["", [Validators.required]]
      }
    );
  }

  ngOnInit() {
  }

  crearPaquete(): void {
    this.paqueteservice.crearPaquete(this.form.value)
      .subscribe(
        //exito
        (respuesta) => {
          console.log('Respuesta del servidor: ', respuesta);
        },
        //fracaso
        (error) => {
          console.log('Error en el servido: ', error);
        },
        //culminacion del observable
        () => {
          console.log('Se termino de ejecutar el observable');          
        }
      );
  }

  reiniciarForm():void{
    this.form.reset();
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
